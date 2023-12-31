import * as React from "react";
import LeftNavBar from "./components/LeftNavBar";
import SwiperContent from "./components/SwiperContent";
import { Box, BoxProps, Paper, styled } from "@mui/material";
import { useGlobaltore } from "./store/global";
import PageLoading from "./components/PageLoading";

import BgImg from "./assets/bg.png";
import SlideDialog from "./components/SlideDialog";
import { Suspense } from "react";

const SlideBox = styled(Box)(({ theme, open }) => ({
  transition: "all 0.3s cubic-bezier(0,.98,.4,.99)",
  transform: `scale(${open ? 1 : 0.8})`,
  transformOrigin: "50% 50%",
  opacity: open ? 1 : 0,
  height: "100%",
  width: "100%",
}));

const modules = import.meta.glob("./components/Pages/**/*.tsx");

export default function MiniDrawer() {
  const { active, dialogOpen, activeApp } = useGlobaltore((state) => state);

  const Component = React.useMemo(() => {
    if (!activeApp) return null;

    // 获取动态导入的组件模块
    const modulePath = `./components/Pages/${activeApp}/index.tsx`;
    const module = modules[modulePath];

    if (module) {
      // 动态导入并返回 Promise
      return React.lazy(
        () => module() as Promise<{ default: React.ComponentType<any> }>
      );
    } else {
      console.error(`Module not found for ${modulePath}`);
      return null;
    }
  }, [activeApp, modules]);
  return (
    <Paper
      sx={{
        display: "flex",
        height: "100vh",
        width: "100%",
        backgroundImage: `url(${BgImg})`,
        backgroundSize: "cover",
      }}
    >
      <LeftNavBar />
      <Paper
        component="main"
        sx={{
          width: "calc(100% - 120px)",
          height: "100%",
          p: 3,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          position: "relative",
          borderRadius: "0px",
        }}
      >
        <SlideBox open={active}>
          <SwiperContent />
        </SlideBox>

        <SlideDialog open={dialogOpen}>
          <Suspense fallback={<PageLoading />}>
            {Component && <Component />}
          </Suspense>
        </SlideDialog>
      </Paper>
    </Paper>
  );
}
