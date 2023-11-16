import * as React from "react";
import { Layer, Line, Image as KonvaImage } from "react-konva";
import Konva from "konva";
import { useInterval } from "ahooks";
import { useMapStore } from "../../../../store/map";

let current = 0;
let len = 9 * 40;
let pointsAry = [
  [0, 0],
  [-len, 0],
  [-len, len],
  [len, len],
  [len, -len],
  [-len, -len],
  [-len, 0],
  [0, 0],
];

const LineGrid = (props: any) => {
  const { activePanel, setActivePanel } = props;
  const [database, setDatabase] = React.useState<any>({
    xAxios: [],
    yAxios: [],
  });
  const [config, setConfig] = React.useState<any>({
    count: 5000,
    gap: 40,
  });
  const [imageObj, setImageObj] = React.useState<HTMLImageElement | undefined>(
    undefined
  );

  const [carPosition, setCarPosition] = React.useState<any>({
    x: 0,
    y: 0,
  });

  const { agvPosition, setAgvPosition } = useMapStore((store) => ({
    agvPosition: store.agvPosition,
    setAgvPosition: store.setAgvPosition,
  }));

  const carRef = React.useRef(null);

  let agvPositionQueue: any = [];
  // 动画还有2个点 ? 距离和时间应该是动态的? yeild的参数应该也要是动态的才行
  React.useEffect(() => {
    console.log("监听store的agvPosition", agvPosition);
  }, [agvPosition]);

  React.useEffect(() => {
    if (!carRef.current) return;
    setAgvPosition({ x: pointsAry[current][0], y: pointsAry[current][1] });
    agvPositionQueue.push(agvPosition);
    function* animate(arr: any) {
      while (current < arr.length) {
        // yield arr[index]; // 执行动画或打印数组元素
        const [x, y] = pointsAry[current];
        setAgvPosition({ x, y });
        const tween = new Konva.Tween({
          node: carRef.current!,
          duration: 5,
          x: x,
          y: y,
          easing: Konva.Easings.Linear,
        });
        tween.play();
        current++;
        if (current === arr.length) current = 0;
        yield new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }
    function next(ret: any) {
      if (ret.done) return ret.value;
      return Promise.resolve(ret.value).then(() => {
        next(animation.next());
      });
    }
    const animation = animate(pointsAry);
    animation.next();
    next(animation.next());
  }, [carRef.current]);

  React.useEffect(() => {
    const { count, gap } = config;
    let xAxios = [],
      yAxios = [],
      origin = 0;
    while (origin < count) {
      let x = {
        x1: origin,
        y1: count,
        x2: origin,
        y2: -count,
      };
      let x2 = {
        x1: -origin,
        y1: count,
        x2: -origin,
        y2: -count,
      };

      let y = {
        x1: -count,
        y1: origin,
        x2: count,
        y2: origin,
      };
      let y2 = {
        x1: -count,
        y1: -origin,
        x2: count,
        y2: -origin,
      };
      xAxios.push(Object.values(x));
      xAxios.push(Object.values(x2));
      yAxios.push(Object.values(y));
      yAxios.push(Object.values(y2));
      origin += gap;
    }
    setDatabase({
      xAxios,
      yAxios,
    });
    const image = new Image();
    image.src = "../../../../../assets/agv.svg";
    image.onload = () => setImageObj(image);
  }, []);

  // useInterval(() => {
  //   console.log("1333");
  //   // let newAry = [...carPosition];
  //   // newAry.push(pointsAry[current]);
  //   console.log("pointsAry[current]", pointsAry[current]);
  //   // setCarPosition({ x: pointsAry[current][0], y: pointsAry[current][1] });
  //   // const { x, y } = carRef.current!.attrs;
  //   // const tween = new Konva.Tween({
  //   //   node: carRef.current!,
  //   //   duration: 1,
  //   //   x: x + 50,
  //   //   y: y + 50,
  //   //   easing: Konva.Easings.Linear,
  //   // });
  //   // tween.play();
  // }, 2000);

  return (
    <Layer>
      {database.xAxios.map((points: any) => (
        <Line points={points} strokeWidth={1} stroke={"#8f8f8f"} />
      ))}
      {database.yAxios.map((points: any) => (
        <Line points={points} strokeWidth={1} stroke={"#8f8f8f"} />
      ))}
      <Line
        points={[-config.count, 0, config.count, 0]}
        strokeWidth={1}
        stroke={"white"}
      />
      <Line
        points={[0, config.count, 0, -config.count]}
        strokeWidth={1}
        stroke={"white"}
      />
      {imageObj && (
        <KonvaImage
          ref={carRef}
          image={imageObj}
          {...carPosition}
          offsetX={23}
          offsetY={35}
          width={46}
          height={70}
        ></KonvaImage>
      )}
    </Layer>
  );
};

export default LineGrid;
