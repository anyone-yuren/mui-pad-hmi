import {
  Grid,
  styled,
  Paper,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { DatePicker, Radio, Space, ConfigProvider } from "antd";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import locale from "antd/locale/zh_CN";
import "swiper/css";
import "swiper/css/pagination";
import AboutLogoIcon from "../../SvgIcon/AboutLogoIcon";
import ErrorInfoIcon from "../../SvgIcon/ErrorInfoIcon";
import FirstmaintenanceIcon from "../../SvgIcon/FirstmaintenanceIcon";
import AboutStaterIcon from "../../SvgIcon/AboutStaterIcon";
import CommonChart from "./components/Chart";
import SecondaryPage from "@/components/SecondaryPage";
import { animated, useSpring } from "@react-spring/web";
import GlobalPanel from "@/components/GlobalPanel";
import EmptyBox from "@/components/Empty";
const { RangePicker } = DatePicker;
const StyleGrid = styled(animated(Grid))(({ open }) => ({
  opacity: open ? 1 : 0.4,
  transform: open
    ? "perspective(100px) rotateY(0deg)"
    : "perspective(100px) rotateY(1deg) ",
  transformOrigin: "left center",
  transition: "all 0.5s ease",
}));
const About = () => {
  const Item = styled(Box)(({ theme }) => ({
    background: "#445260",
    padding: "0px!important",
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
  const ItemTitle = styled("div")(({ theme }) => ({
    fontSize: "30px",
    textAlign: "left",
    margin: "0px",
    color: "#000",
  }));
  const [errData, setErrData] = useState([
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
    {
      errCode: "RX1093841",
      errStr: "异常问题描述内容详情放这里，这里能写很多 字，还可以换行。",
    },
  ]);
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
      states:
        "1" == 1 ? (
          <FirstmaintenanceIcon isActive></FirstmaintenanceIcon>
        ) : (
          <FirstmaintenanceIcon isActive></FirstmaintenanceIcon>
        ),
    },
    {
      title: "当前状态",
      states:
        "1" == 0 ? (
          <AboutStaterIcon></AboutStaterIcon>
        ) : (
          <AboutStaterIcon isActive></AboutStaterIcon>
        ),
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
  const mapListDom = useMemo(() => {
    return errData?.map((item: Array, index: number) => {
      return (
        <ListItem
          sx={{
            padding: 0,
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <ListItemText
            sx={{
              margin: "10px 0",
              ".MuiListItemText-primary": {
                fontSize: "18px",
              },
              ".MuiListItemText-secondary": {
                fontSize: "18px",
                color: "rgb(255 255 255 / 50%)",
              },
            }}
            primary={"错误码：" + item.errCode}
            secondary={item.errStr}
          />
        </ListItem>
      );
    });
  }, []);
  const ErrList = useMemo(() => {
    return (
      <>
        <List
          sx={{
            width: "100%",
            bgcolor: "transparent",
            overflow: "auto",
            height: "100%",
            padding: 0,
          }}
        >
          {mapListDom}
        </List>
      </>
    );
  }, [errData]);
  return (
    <>
      <StyleGrid
        container
        spacing={2.5}
        sx={{ height: "calc(100% + 20px)" }}
        open={!startAnimate}
      >
        <Grid item xs={4} sx={{ height: "50%" }}>
          <GlobalPanel delay={100} direction="up">
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
          </GlobalPanel>
        </Grid>
        <Grid item xs={8} sx={{ height: "50%" }}>
          <GlobalPanel delay={250} direction="up">
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
          </GlobalPanel>
        </Grid>
        <Grid item xs={8} sx={{ height: "50%" }}>
          <GlobalPanel delay={350} direction="up">
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
          </GlobalPanel>
        </Grid>
        <Grid item xs={4} sx={{ height: "50%" }}>
          <GlobalPanel delay={450} direction="up">
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
          </GlobalPanel>
        </Grid>
      </StyleGrid>
      <SecondaryPage
        open={open}
        setOpen={setOpen}
        startAnimate={setStartAnimate}
      >
        <Item
          sx={{
            margin: "20px 0",
            width: "100%",
            padding: "20px!important",
            height: "calc(100% - 60px)",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              flexWrap: "nowrap",
              borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            <ItemTitle>异常查询</ItemTitle>
            <ConfigProvider locale={locale}>
              <RangePicker
                style={{
                  height: "70px",
                  borderRadius: "5px",
                  background: "rgb(216 216 216 / 20%)",
                  border: "none",
                }}
                size={"large"}
                onChange={(value, mode) => {
                  console.log("onChange", value, mode);
                }}
              />
            </ConfigProvider>
            <Button
              variant="开始查询"
              sx={{
                backgroundColor: "rgba(216, 216, 216, 0.2)",
                boxSizing: "border-box",
                border: "2px solid #00D1D1",
                color: "#00D1D1",
                fontSize: "30px",
              }}
            >
              开始查询
            </Button>
          </div>

          <div
          // style={{
          //   height: window.innerHeight - 182 - 65,
          // }}
          >
            {errData.length > 0 ? (
              ErrList
            ) : (
              <EmptyBox
                title="没有异常数据"
                backgroundColor="transparent"
              ></EmptyBox>
            )}
          </div>
        </Item>
      </SecondaryPage>
    </>
  );
};

export default About;
