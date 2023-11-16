import * as React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import GlobalPanel from "../../GlobalPanel";
import MenuBar from "./menuBar";
import PopupView from "./popupView";
import PopupAction from "./popupAction";
import ReflectorCanvas from "./ReflectorCanvas";
import { useMapStore, TActivePanel } from "../../../store/map";
import SlamCanvas from "./SlamCanvas";

const Navigate = () => {
  const { popupActionConfig, activePanel } = useMapStore((store) => ({
    activePanel: store.activePanel,
    popupActionConfig: store.mapPopupActionConfig,
  }));

  const canvasView: Record<TActivePanel, React.ReactElement> = {
    Reflector: <ReflectorCanvas></ReflectorCanvas>,
    Slam: <SlamCanvas></SlamCanvas>,
  };

  React.useEffect(() => {
    console.log("popupActionConfig", popupActionConfig);
  }, [popupActionConfig]);

  const isSlam = React.useMemo(() => activePanel === "Slam", [activePanel]);

  return (
    <>
      <GlobalPanel
        delay={100}
        sx={{
          height: "100%",
          width: "100%",
          padding: 0,
          background: "transparent",
        }}
      >
        <div
          style={{ display: "flex", gap: 20, height: "100%", width: "100%" }}
        >
          {popupActionConfig?.visible && (
            <PopupAction type={popupActionConfig.type}></PopupAction>
          )}
          <div
            style={{
              flex: 1,
              overflow: "hidden",
              background: "#445260",
              borderRadius: 20,
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                pointerEvents: "none",
                zIndex: 10,
                color: "black",
                textAlign: "center",
              }}
            >
              <PopupView hideBottom={!isSlam} hideMapName={!isSlam}></PopupView>
            </div>

            {canvasView[activePanel]}
          </div>
          <div style={{ width: 200 }}>
            <MenuBar></MenuBar>
          </div>
        </div>
      </GlobalPanel>
    </>
  );
};

export default Navigate;
