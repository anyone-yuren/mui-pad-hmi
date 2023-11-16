import { Card, styled, Paper, Grid, TableCell } from "@mui/material";
import React from "react";

import GlobalPanel from "../../GlobalPanel";

import CarNumberIcon from "../../SvgIcon/CarNumberIcon";
import SpeedsIcon from "../../SvgIcon/SpeedsIcon";
import RunTimeIcon from "../../SvgIcon/RunTimeIcon";

import VehicleStatus from "./components/VehicleStatus";

const Dashboard = () => {
  const Itemxs12 = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgb(68 82 96 / 90%)",
    boxShadow: "none",
    borderRadius: "20px",
    padding: "20px",
    textAlign: "center",
    color: "#fff",
    overflow: "hidden",
    height: "100%",
    width: "100%",
  }));
  const ItemTitle = styled("div")(({ theme }) => ({
    padding: "0px",
    margin: "0px",
    textAlign: "center",
    color: "white",
    fontSize: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&& p": {
      margin: "0px",
    },
    "&& span": {
      fontSize: "18px",
      opacity: 0.5,
    },
  }));
  const ItemContent = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    "&& div": {
      marginTop: "25px",
    },
    "&& p": {
      margin: "0px",
      fontSize: "36px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
    },
    "&& svg": {
      marginRight: "10px",
    },
    "&& span": {
      fontSize: "18px",
      opacity: 0.5,
    },
  }));
  const ItemContents = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    overflow: "auto",
    "&& div": {
      marginTop: "0px",
    },
    "&& p": {
      margin: "0px",
      fontSize: "36px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "center",
    },
    "&& svg": {
      marginRight: "10px",
    },
    "&& span": {
      fontSize: "18px",
      opacity: 0.5,
    },
  }));
  return (
    <Grid container columnSpacing={2.5} sx={{ height: "100%" }}>
      <Grid item xs={4}>
        <GlobalPanel delay={100} sx={{ height: "100%" }}>
          <VehicleStatus />
        </GlobalPanel>
      </Grid>
      <Grid item xs={4}>
        <GlobalPanel delay={250} sx={{ height: "100%" }}></GlobalPanel>
      </Grid>
      <Grid item xs={4}>
        <GlobalPanel
          delay={400}
          sx={{ height: "100%", padding: "0", background: "transparent" }}
        >
          <Grid
            container
            spacing={2.5}
            sx={{
              paddingTop: "0px !important",
              marginTop: "0px !important",
              height: "100%",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                paddingTop: "0px !important",
                marginTop: "0px !important",
              }}
            >
              <Itemxs12>
                <ItemTitle>
                  <p>货物</p>
                </ItemTitle>
                <ItemContents>
                  <div>
                    <p>5</p>
                    <span>货物数量(件)</span>
                  </div>
                  <div>
                    <p>36</p>
                    <span>货物重量(千克)</span>
                  </div>
                </ItemContents>
              </Itemxs12>
            </Grid>
            <Grid item xs={12}>
              <Itemxs12>
                <ItemTitle>
                  <p>叉牙位置</p>
                  <span>(单位:毫米)</span>
                </ItemTitle>
                <ItemContents>
                  <div>
                    <p>5</p>
                    <span>平移</span>
                  </div>
                  <div>
                    <p>36</p>
                    <span>前移</span>
                  </div>
                  <div>
                    <p>36</p>
                    <span>升高</span>
                  </div>
                </ItemContents>
              </Itemxs12>
            </Grid>
            <Grid item xs={12}>
              <Itemxs12>
                <ItemContents>
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                        padding: "0 13px 13px 13px",
                      }}
                    >
                      <CarNumberIcon />
                      <div
                        style={{
                          textAlign: "left",
                          marginLeft: "10px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "36px",
                            fontWeight: 500,
                            color: "#fff",
                            justifyContent: "flex-start",
                            alignItems: "baseline",
                          }}
                        >
                          137
                        </p>
                        <span style={{ fontSize: "18px" }}>车号</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                        padding: "13px",
                      }}
                    >
                      <SpeedsIcon />
                      <div
                        style={{
                          textAlign: "left",
                          marginLeft: "10px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "36px",
                            fontWeight: 500,
                            color: "#fff",
                            justifyContent: "flex-start",
                            alignItems: "baseline",
                          }}
                        >
                          2 <span style={{ fontSize: "24px" }}>/km</span>
                        </p>
                        <span style={{ fontSize: "18px" }}>已行驶公里数</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        padding: "13px 13px 0 13px",
                      }}
                    >
                      <RunTimeIcon />
                      <div
                        style={{
                          textAlign: "left",
                          marginLeft: "10px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "36px",
                            fontWeight: 500,
                            color: "#fff",
                            justifyContent: "flex-start",
                            alignItems: "baseline",
                          }}
                        >
                          193 <span style={{ fontSize: "24px" }}>/h</span>
                        </p>
                        <span style={{ fontSize: "18px" }}>已运行时间</span>
                      </div>
                    </div>
                  </div>
                </ItemContents>
              </Itemxs12>
            </Grid>
          </Grid>
        </GlobalPanel>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
