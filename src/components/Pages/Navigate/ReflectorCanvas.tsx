import React, { useEffect } from "react";
import { PopupActionStyleComponents } from "./popupAction.styled";
import { Stage } from "react-konva";
import Konva from "konva";
import LineGrid from "./ReflectorCanvas/lineGrid";
import Points from "./ReflectorCanvas/points";
import { useSize } from "ahooks";
import { useMapStore } from "../../../store/map";

const { MapActionPopup } = PopupActionStyleComponents;
type CoordinateType = {
  x: number;
  y: number;
};

let lastCenter: CoordinateType | null = null;
let lastDist = 0;
const ReflectorCanvas = (props: any) => {
  const { activePanel, setActivePanel } = props;
  const [scale, setScale] = React.useState(1);
  const [stagePos, setStagePos] = React.useState({ x: 0, y: 0 });
  const { agvPosition, lockAgvView } = useMapStore((store) => ({
    agvPosition: store.agvPosition,
    lockAgvView: store.lockAgvView,
  }));
  const canvasRef = React.useRef(null);
  const stageRef = React.useRef(null);

  const [stageLayout, setStageLayout] = React.useState({
    width: 2400,
    height: 2400,
    offsetY: 0,
    offsetX: 0,
  });
  const size: { width: number; height: number } | undefined =
    useSize(canvasRef);

  useEffect(() => {
    if (size && size.width && size.height) {
      setStageLayout({
        ...stageLayout,
        offsetY: -((size?.width || 2) / 2),
        offsetX: (size?.height || 2) / 2,
      });
    }
  }, [size]);

  useEffect(() => {
    const stage = stageRef.current;
    const tween = new Konva.Tween({
      node: stage,
      duration: 5,
      x: -agvPosition.y,
      y: agvPosition.x,
      easing: Konva.Easings.Linear,
    });
    if (!lockAgvView) {
      const tween = new Konva.Tween({
        node: stage,
        duration: 5,
        x: stage.x(),
        y: stage.y(),
        easing: Konva.Easings.Linear,
      });
      tween.finish();
      return;
    }
    tween.play();
  }, [agvPosition, lockAgvView]);

  const stageWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    console.log("奇葩的滚轮事件开始出发", lockAgvView);

    const scaleBy = 1.1;
    const stage = e.target.getStage()!;
    const oldScale = stage.scaleX();

    const pointer = stage.getPointerPosition()!;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    let newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

    setScale(newScale);

    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    stage.position(newPos);
    stage.batchDraw();
  };

  const handleTouchMove = (e: Konva.KonvaEventObject<TouchEvent>) => {
    e.evt.preventDefault();
    const touch1 = e.evt.touches[0];
    const touch2 = e.evt.touches[1];
    if (lockAgvView) return;

    if (touch1 && touch2) {
      console.log("[stationStage.tsx] 地图TouchMove双指事件 触发");
      // if the stage was under Konva's drag&drop
      // we need to stop it, and implement our own pan logic with two pointers
      if (canvasRef.current.isDragging()) {
        canvasRef.current.stopDrag();
      }

      const p1 = {
        x: touch1.clientX,
        y: touch1.clientY,
      };
      const p2 = {
        x: touch2.clientX,
        y: touch2.clientY,
      };

      if (!lastCenter) {
        lastCenter = getCenter(p1, p2);
        return;
      }
      const newCenter = getCenter(p1, p2);

      const dist = getDistance(p1, p2);

      if (!lastDist) {
        lastDist = dist;
      }

      // local coordinates of center point
      const pointTo = {
        x: (newCenter.x - canvasRef.current.x()) / canvasRef.current.scaleX(),
        y: (newCenter.y - canvasRef.current.y()) / canvasRef.current.scaleX(),
      };

      let scale = canvasRef.current.scaleX() * (dist / lastDist);

      console.log("scale", scale);
      if (scale > 2) {
        scale = 2;
      }

      if (scale < 0.5) {
        scale = 0.5;
      }

      canvasRef.current.scaleX(scale);
      canvasRef.current.scaleY(scale);

      // calculate new position of the stage
      const dx = newCenter.x - lastCenter.x;
      const dy = newCenter.y - lastCenter.y;

      const newPos = {
        x: newCenter.x - pointTo.x * scale + dx,
        y: newCenter.y - pointTo.y * scale + dy,
      };

      canvasRef.current.position(newPos);

      lastDist = dist;
      lastCenter = newCenter;
    }
  };
  const getDistance = (p1: CoordinateType, p2: CoordinateType) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };

  const getCenter = (p1: CoordinateType, p2: CoordinateType) => {
    return {
      x: (p1.x + p2.x) / 2,
      y: (p1.y + p2.y) / 2,
    };
  };

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      ref={canvasRef}
    >
      <Stage
        {...stageLayout}
        {...stagePos}
        draggable={!lockAgvView}
        ref={stageRef}
        rotationDeg={-90}
        onWheel={stageWheel}
        onTouchMove={handleTouchMove}
      >
        <LineGrid></LineGrid>
        <Points></Points>
      </Stage>
    </div>
  );
};

export default ReflectorCanvas;
