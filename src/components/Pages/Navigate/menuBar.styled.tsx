import * as React from "react";
import { TActivePanel } from "./index.d";

import { Button, ButtonGroup, styled } from "@mui/material";

const TabsButtonContainer: React.FC<any> = styled((props: any) => {
  return <ButtonGroup {...props}>{props?.children}</ButtonGroup>;
})(() => ({
  justifyContent: "center",
  borderRadius: "20px",
  overflow: "hidden",
  border: "none",
}));

const MenuBarContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  gap: "20px",
}));

const TabsButton: React.FC<any> = styled(Button)(
  (styleProps: { active: TActivePanel; name: TActivePanel }) => {
    const { active, name } = styleProps;
    const backgroundColor = active === name ? "#00D1D1" : "#445260";
    return {
      color: "white",
      backgroundColor,
      width: "100px",
      height: "72px",
      fontSize: "20px",
      border: "none",
      "&:hover": {
        backgroundColor,
        border: "none",
      },
      "&:focus": {
        outline: "none",
      },
    };
  }
);

interface ISwitchAngleView {
  isLock: boolean;
}
const SwitchAngleView: React.FC<any> = styled("div")(
  (styleProps: ISwitchAngleView) => {
    return {
      height: "220px",
      width: "100%",
      borderRadius: "20px",
      background: styleProps.isLock ? "#00D1D1" : "#445260",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "& > span": {
        height: "18px",
      },
      "& > div": {
        color: "white",
        fontSize: "24px",
      },
      "& > div:nth-of-type(2)": {
        color: styleProps.isLock ? "white" : "#9fa6ad",
        fontSize: "20px",
      },
    };
  }
);
const MenuIconList = styled("div")(() => {
  return {
    flex: 1,
    width: "100%",
    borderRadius: "20px",
    background: "#445260",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  };
});

interface IMenuIconItem {
  hideLine: boolean;
}
const MenuIconItem: React.FC<any> = styled(Button)(
  (styleProps: IMenuIconItem) => {
    const { hideLine } = styleProps;
    return {
      flex: 1,
      fontSize: "20px",
      color: "white",
      display: "flex",
      alignItems: "center",
      width: "100%",
      justifyContent: "center",
      position: "relative",
      "&:after": {
        content: "' '",
        width: "70%",
        height: "1px",
        background: "#D8D8D8",
        position: "absolute",
        bottom: hideLine ? "-100px" : "1px",
      },
      "&:focus": {
        outline: "none",
      },
    };
  }
);
// menu bar components namespace
const MenuBarStyleComponents = {
  TabsButton,
  MenuBarContainer,
  TabsButtonContainer,
  SwitchAngleView,
  MenuIconList,
  MenuIconItem,
};
export { MenuBarStyleComponents };
