import * as React from "react";
import { PopupActionStyleComponents } from "./popupAction.styled";
import { MenuBarStyleComponents } from "./menuBar.styled";
import { useMapStore, IMapPopupActionConfig } from "../../../store/map";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

const { MapActionPopup, MapActionPopupTitle } = PopupActionStyleComponents;
const { MenuIconItem, MenuIconList } = MenuBarStyleComponents;

const PopupAction = (props: { type: IMapPopupActionConfig["type"] }) => {
  const { type } = props;
  const { setMapPopupActionConfig } = useMapStore((store) => ({
    setMapPopupActionConfig: store.setMapPopupActionConfig,
  }));

  const ReflectorMapAction = () => {
    return (
      <MapActionPopup>
        <MapActionPopupTitle>操作列表</MapActionPopupTitle>
        <MenuIconList style={{ width: 200 }}>
          <MenuIconItem>镇定</MenuIconItem>
          <MenuIconItem>添加</MenuIconItem>
          <MenuIconItem>保存地图</MenuIconItem>
          <MenuIconItem
            hideLine
            onClick={() => {
              setMapPopupActionConfig({
                visible: false,
                type: undefined,
              });
            }}
          >
            结束构图
          </MenuIconItem>
        </MenuIconList>
        <div
          style={{
            width: 300,
            height: 220,
            borderRadius: 20,
            background: "#445260",
            border: "1px solid black",
            textAlign: "center",
            paddingBlock: 10,
          }}
        >
          <div>新观测到的反光板的坐标</div>
        </div>
      </MapActionPopup>
    );
  };
  const SlamMapListAction = () => {
    return (
      <div
        style={{
          width: 400,
          height: "100%",
          position: "absolute",
          right: 219,
          top: 0,
          background: "#3F4E5C",
          zIndex: 1,
          borderRadius: 20,
        }}
      >
        <div
          style={{
            height: 76,
            display: "flex",
            alignItems: "center",
            marginInline: 20,
            borderBottom: "1px solid #8f9192",
          }}
        >
          <div style={{ fontSize: 24, color: "white" }}>地图列表</div>
          <div
            style={{ flex: 1, fontSize: 14, color: "#fffff", paddingLeft: 10 }}
          >
            点击尾部icon更多操作
          </div>
          <CloseIcon
            style={{ color: "white" }}
            fontSize={"large"}
            onClick={() => {
              setMapPopupActionConfig({
                visible: false,
                type: undefined,
              });
            }}
          ></CloseIcon>
        </div>

        <div
          style={{
            height: 76,
            display: "flex",
            alignItems: "center",
            marginInline: 20,
            borderBottom: "1px solid #8f9192",
          }}
        >
          <CheckIcon style={{ color: "#00D1D1" }}></CheckIcon>
          <div style={{ flex: 1, fontSize: 20, marginLeft: 12 }}>map139754</div>
          <IconButton aria-label="Example" style={{ outline: "none" }}>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    );
  };
  // "ReflectorAddMap" | "ReflectorUpdateMap" | "SlamMapList"
  const renderComponents = {
    ReflectorAddMap: ReflectorMapAction,
    ReflectorUpdateMap: ReflectorMapAction,
    SlamMapList: SlamMapListAction,
  };

  return <>{type && renderComponents[type]()}</>;
};

export default PopupAction;
