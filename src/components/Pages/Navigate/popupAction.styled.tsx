import React from "react";
import { styled } from "@mui/material";

const MapActionPopup = styled("div")(() => {
  return {
    height: "100%",
    borderRadius: "20px",
    position: "absolute",
    right: 0,
    top: 0,
    background: "transparent",
    zIndex: 10,
    display: "flex",
    gap: 20,
    flexDirection: "column",
    alignItems: "flex-end",
  };
});

const MapActionPopupTitle = styled("div")(() => {
  return {
    height: 72,
    width: 200,
    background: "#445260",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    position: "relative",
    "&:after": {
      content: "' '",
      width: 5,
      height: 20,
      background: "#00D1D1",
      position: "absolute",
      left: 45,
      borderRadius: 5,
      overflow: "hidden",
    },
  };
});
const PopupActionStyleComponents = {
  MapActionPopup,
  MapActionPopupTitle,
};

export { PopupActionStyleComponents };
