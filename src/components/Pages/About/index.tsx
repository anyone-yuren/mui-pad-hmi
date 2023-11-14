import {
  Grid,
  styled,
  Paper,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
  IconButton,
  Box,
} from "@mui/material";
import React, { useState, useEffect, useCallback, useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Card, List } from "antd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GlobalPanel from "../../GlobalPanel";
import AboutLogoIcon from "../../SvgIcon/AboutLogoIcon";
import ErrorInfoIcon from "../../SvgIcon/ErrorInfoIcon";
import CommonChart from "./components/Chart";
import SecondaryPage from "@/components/SecondaryPage";
import { animated, useSpring } from "@react-spring/web";

const StyleGrid = styled(animated(Grid))(({ open }) => ({
  opacity: open ? 1 : 0.4,
  transform: open
    ? "perspective(100px) rotateY(0deg)"
    : "perspective(100px) rotateY(1deg) ",
  transformOrigin: "left center",
  transition: "all 0.5s ease",
}));
const Settings = () => {
  const [loading, setLoading] = React.useState(true);

  const Item = styled(Paper)(({ theme }) => ({
    background: "#445260",
    padding: "0px",
    textAlign: "center",
    color: "#fff",
    height: "100%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "&& p": {
      padding: "0",
      margin: "0",
      fontSize: "20px",
    },
  }));
  const PsBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    width: "100%",
    left: 0,
    bottom: "-10px",
    textAlign: "center",
  }));
  const BottomTypography = styled(Typography)(({ theme }) => ({
    color: "#3D3D3D",
  }));
  const data = [
    {
      title: "车辆编号",
      states: "137",
    },
    {
      title: "车辆类型",
      states: "堆垛车",
    },
    {
      title: "叉臂类型",
      states: "托盘车",
    },
    {
      title: "底盘",
      states: "单舵",
    },
    {
      title: "常规保养",
      states: "1",
    },
    {
      title: "额外保养",
      states: "1",
    },
    {
      title: "首次保养",
      states: "2",
    },
    {
      title: "当前状态",
      states: "1",
    },
  ];
  const nodeListDom = useMemo(() => {
    return data?.map((item: Array, index: number) => {
      return (
        <Box
          sx={{
            width: "25%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "flex-end",

            border: "1px solid rgb(216 216 216 / 20%)",
            borderTop: "none",
            borderLeft: "none",
            "&& p": {
              fontSize: "30px",
              lineHeight: "1",
            },
            "&& span": {
              fontSize: "20px",
              color: "#ffffff80",
              margin: "20px 0 30px ",
            },
            ":nth-child(4)": {
              borderRight: "none",
            },
            ":nth-of-type(n+5)": {
              borderBottom: "none",
              "&& p": { fontSize: "50px" },
            },
            ":first-child": {
              "&& p": { fontSize: "50px" },
            },
            ":last-child": {
              borderRight: "none",
            },
          }}
        >
          <p>{item.states}</p>
          <span>{item.title}</span>
        </Box>
      );
    });
  }, []);
  const [open, setOpen] = React.useState(false);
  const [startAnimate, setStartAnimate] = React.useState(false);
  const RenderOperationChart = useMemo(() => {
    return <CommonChart max={110} value={11} />;
  }, []);
  return (
    <>
      <StyleGrid
        container
        spacing={2.5}
        sx={{ height: "calc(100% + 20px)" }}
        open={!startAnimate}
      >
        <Grid item xs={4} sx={{ height: "50%" }}>
          <Item
            sx={{
              "&& .MuiSvgIcon-root": {
                width: "240px!important",
                height: "auto!important",
              },
            }}
          >
            <AboutLogoIcon></AboutLogoIcon>
            <p
              style={{
                color: "#ffffff80",
                marginTop: "20px",
              }}
            >
              Multiway Robotics Co. Ltd.
            </p>
            <p
              style={{
                color: "#fff",
                marginTop: "60px",
              }}
            >
              序列号: MW7788802000666
            </p>
            <p
              style={{
                color: "#fff",
                marginTop: "20px",
              }}
            >
              出厂日期: 2023-12-25
            </p>
          </Item>
        </Grid>
        <Grid item xs={8} sx={{ height: "50%" }}>
          <Item
            sx={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "stretch",
              alignItems: "baseline",
              padding: "20px",
            }}
          >
            <p style={{ width: "100%", textAlign: "left" }}>信息统计及预警</p>

            <Grid
              xs={4}
              sx={{
                position: "relative",
              }}
            >
              {RenderOperationChart}
              <PsBox>
                <BottomTypography sx={{ fontSize: "20px", color: "#fff" }}>
                  {"运行时间"}
                </BottomTypography>
                <Typography
                  sx={{
                    fontSize: "16px!important",
                    color: "rgb(255 255 255)",
                  }}
                >
                  Max {110} Hours
                </Typography>
              </PsBox>
            </Grid>
            <Grid
              xs={4}
              sx={{
                position: "relative",
              }}
            >
              <CommonChart max={365} value={15} />
              <PsBox>
                <BottomTypography sx={{ fontSize: "20px", color: "#fff" }}>
                  {"系统天数"}
                </BottomTypography>
                <Typography
                  sx={{
                    fontSize: "16px!important",
                    color: "rgb(255 255 255)",
                  }}
                >
                  Max {365} Days
                </Typography>
              </PsBox>
            </Grid>
            <Grid
              xs={4}
              sx={{
                position: "relative",
              }}
            >
              <CommonChart max={5000} value={1111} />
              <PsBox>
                <BottomTypography sx={{ fontSize: "20px", color: "#fff" }}>
                  {"公里数"}
                </BottomTypography>
                <Typography
                  sx={{
                    fontSize: "16px!important",
                    color: "rgb(255 255 255)",
                  }}
                >
                  Max {5000} Km
                </Typography>
              </PsBox>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={8} sx={{ height: "50%" }}>
          <Item
            sx={{
              padding: "20px",
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
            }}
          >
            {nodeListDom}
          </Item>
        </Grid>
        <Grid item xs={4} sx={{ height: "50%" }}>
          <Item
            sx={{
              "&& .MuiSvgIcon-root": {
                width: "90px!important",
                height: "auto!important",
              },
            }}
            onClick={() => {
              setOpen(true);
              setStartAnimate(true);
            }}
          >
            <ErrorInfoIcon></ErrorInfoIcon>
            <p style={{ fontSize: "30px", marginTop: "24px" }}>异常查询</p>
          </Item>
        </Grid>
      </StyleGrid>
      <SecondaryPage
        open={open}
        setOpen={setOpen}
        startAnimate={setStartAnimate}
      ></SecondaryPage>
    </>
  );
};

export default Settings;
