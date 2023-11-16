import * as React from "react";
import { Layer, Rect, Image as KonvaImage } from "react-konva";
import Konva from "konva";
import { useInterval } from "ahooks";

const list = [
  {
    x: 40,
    y: 40,
    color: "green",
  },
  {
    x: -110,
    y: -10,
    color: "yellow",
  },
  {
    x: 110,
    y: -90,
    color: "red",
  },
  {
    x: 0,
    y: 0,
    color: "red",
  },
  {
    x: -99,
    y: -67,
    color: "yellow",
  },
  {
    x: 100,
    y: 100,
    color: "black",
  },
];

const Points = (props: any) => {
  return (
    <Layer>
      {list.map((point) => {
        return (
          <Rect
            x={point.x}
            y={point.y}
            width={20}
            height={20}
            offsetX={10}
            offsetY={10}
            fill={point.color}
          ></Rect>
        );
      })}
    </Layer>
  );
};

export default Points;
