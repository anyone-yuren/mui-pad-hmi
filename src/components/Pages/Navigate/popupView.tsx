import React from "react";
import { PopupViewStyleComponents } from "./popupView.styled";
import PageLoading from "../../PageLoading";
import { styled } from "@mui/material";

const { PositionView, StateView, MapName, PositionViewStyled } =
  PopupViewStyleComponents;

const ToastBox = styled("div")(() => {
  return {
    "& .MuiBox-root": {
      background: "white!important",
      width: 0,
      paddingLeft: 30,
      "& div": {
        width: 35,
      },
    },
    "& .MuiLinearProgress-root": {
      zIndex: 10,
    },
  };
});

const PopupView = (props: { hideBottom: boolean; hideMapName: boolean }) => {
  const { hideBottom, hideMapName } = props;

  return (
    <>
      <PositionView x={9189.9} y={2512.7} angel={2273.1}></PositionView>
      {hideBottom && <StateView state="Normal" match={9} nums={8}></StateView>}
      {hideMapName && <MapName>Current map：10258.map</MapName>}

      {/* loading可以抽出去 */}
      {false && (
        <PositionViewStyled
          style={{
            transform: "translate(-50%, 0%)",
            left: "50%",
            top: 100,
            color: "black",
          }}
        >
          <ToastBox>
            <PageLoading></PageLoading>
          </ToastBox>
          <span
            style={{ color: "black", position: "relative", paddingLeft: 40 }}
          >
            请点击地图的位置来重新定位
          </span>
        </PositionViewStyled>
      )}
    </>
  );
};

export default PopupView;
