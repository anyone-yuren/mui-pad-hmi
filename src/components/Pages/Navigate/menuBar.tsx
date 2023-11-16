import * as React from "react";

import { TActivePanel } from "./index.d";
import { MenuBarStyleComponents } from "./menuBar.styled";
import SwitchViewIcon from "../../SvgIcon/SwitchViewIcon";
import SecondaryPage from "@/components/SecondaryPage";

import { useMapStore } from "../../../store/map";
const {
  TabsButton,
  TabsButtonContainer,
  MenuBarContainer,
  SwitchAngleView,
  MenuIconList,
  MenuIconItem,
} = MenuBarStyleComponents;

interface IProps {
  // activePanel: TActivePanel;
  // setActivePanel: (key: TActivePanel) => void;
}
interface IMenuIconListItem {
  title: string;
  callback: () => void;
}

const MenuBar = (props: IProps) => {
  // const { activePanel, setActivePanel } = props;
  const {
    lockAgvView,
    setLockAgvView,
    setMapPopupActionConfig,
    activePanel,
    setActivePanel,
  } = useMapStore((store) => ({
    lockAgvView: store.lockAgvView,
    setLockAgvView: store.setLockAgvView,
    setMapPopupActionConfig: store.setMapPopupActionConfig,
    activePanel: store.activePanel,
    setActivePanel: store.setActivePanel,
  }));

  const isReflector = React.useMemo(
    () => activePanel === "Reflector",
    [activePanel]
  );

  function openFileInput() {
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);
    fileInput.click();
    fileInput.onchange = function (e: any) {
      const files = (this as any).files;
      console.log("onchange", files);
    };
    fileInput.oncancel = function () {
      console.log("cancel");
    };
  }

  const MenuListDict: Record<TActivePanel, Array<IMenuIconListItem>> = {
    Reflector: [
      {
        title: "拓展地图",
        callback: () => {
          console.log("测试拓展地图");
          setMapPopupActionConfig({
            visible: true,
            type: "ReflectorUpdateMap",
          });
        },
      },
      {
        title: "新建地图",
        callback: () => {
          setMapPopupActionConfig({
            visible: true,
            type: "ReflectorAddMap",
          });
        },
      },
      {
        title: "导入地图",
        callback: () => {
          openFileInput();
        },
      },
      {
        title: "导出地图",
        callback: () => {},
      },
      {
        title: "重新定位",
        callback: () => {},
      },
    ],
    Slam: [
      {
        title: "新建",
        callback: () => {},
      },
      {
        title: "拓展地图",
        callback: () => {},
      },
      {
        title: "地图校正",
        callback: () => {},
      },
      {
        title: "智能重定位",
        callback: () => {},
      },
      // {
      //   title: "强制重定位",
      //   callback: () => {},
      // },
      {
        title: "导出地图",
        callback: () => {},
      },
      {
        title: "导入地图",
        callback: () => {},
      },
      {
        title: "地图列表",
        callback: () => {
          setMapPopupActionConfig({
            visible: true,
            type: "SlamMapList",
          });
        },
      },
    ],
  };

  return (
    <MenuBarContainer>
      <TabsButtonContainer variant="outlined">
        <TabsButton
          active={activePanel}
          name="Reflector"
          onClick={() => {
            setActivePanel("Reflector");
          }}
        >
          反光板
        </TabsButton>
        <TabsButton
          active={activePanel}
          name="Slam"
          onClick={() => {
            setActivePanel("Slam");
          }}
        >
          SLAM
        </TabsButton>
      </TabsButtonContainer>
      <MenuIconList>
        {MenuListDict[activePanel].map(
          (item: IMenuIconListItem, index: number) => {
            return (
              <MenuIconItem
                key={item.title + index}
                hideLine={index === MenuListDict[activePanel].length - 1}
                onClick={item.callback}
              >
                {item.title}
              </MenuIconItem>
            );
          }
        )}
      </MenuIconList>
      {isReflector && (
        <SwitchAngleView
          isLock={lockAgvView}
          onClick={() => {
            setLockAgvView(!lockAgvView);
          }}
        >
          <SwitchViewIcon></SwitchViewIcon>
          <span></span>
          <div>切换视角</div>
          <div>{lockAgvView ? "小车视角" : "地图视角"}</div>
        </SwitchAngleView>
      )}
    </MenuBarContainer>
  );
};

export default MenuBar;
