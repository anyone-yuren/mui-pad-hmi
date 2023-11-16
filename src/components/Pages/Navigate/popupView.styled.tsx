import React from "react";
import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";
interface PositionStyledProps {
  x: number | string;
  y: number | string;
  angel: number | string;
}

const PositionViewStyled = styled("div")(() => {
  return {
    background: "white",
    padding: "17px 19px",
    position: "absolute",
    left: 20,
    top: 20,
    borderRadius: 10,
    fontSize: 18,
    color: "black",
    overflow: "hidden",
  };
});
const PositionView = styled((styleProps: PositionStyledProps) => {
  const { x, y, angel } = styleProps;
  return (
    <PositionViewStyled>
      X: {x}mm &nbsp;|&nbsp; Y: {y}mm &nbsp;|&nbsp; θ: {angel}°
    </PositionViewStyled>
  );
})``;

const StateViewStyled = styled("div")(() => {
  return {
    width: 434,
    height: 60,
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0%)",
    background: "white",
    bottom: 0,
    borderRadius: "10px 10px 0px 0px",
    display: "flex",
    fontSize: 16,
    alignItems: "center",
  };
});

const StateViewMidLine = styled("div")(() => {
  return {
    width: 1,
    height: "60%",
    background: "black",
  };
});

interface StateStyledProps {
  state: string;
  match: number;
  nums: number;
}
const StateView = styled((styleProps: StateStyledProps) => {
  const { state, match, nums } = styleProps;
  return (
    <StateViewStyled>
      <div style={{ flex: 1 }}>
        <div>{state}</div>
        <div>道航状态</div>
      </div>
      <StateViewMidLine></StateViewMidLine>
      <div style={{ flex: 1 }}>
        <div>{match}</div>
        <div>匹配数量</div>
      </div>
      <StateViewMidLine></StateViewMidLine>
      <div style={{ flex: 1 }}>
        <div>{nums}</div>
        <div>新反光板数量</div>
      </div>
    </StateViewStyled>
  );
})``;

const MapName = styled("div")(() => {
  return {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "white",
    fontSize: 16,
  };
});

const PopupViewStyleComponents = {
  PositionViewStyled,
  PositionView: PositionView,
  StateView: StateView,
  MapName: MapName,
};

export { PopupViewStyleComponents };
