import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
  IconButton,
  Switch,
  Slider,
} from "@mui/material";
import React, { useState, useEffect, useCallback, useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import GlobalPanel from "../../GlobalPanel";
import EditIcon from "../../SvgIcon/EditIcon";
const Settings = () => {
  const [loading, setLoading] = React.useState(false);
  const [VehicleTravelingParametersData, setVehicleTravelingParametersData] =
    useState([
      { name: "直线前进最大速度", value: "200" },
      { name: "直线后退最大速度", value: "200" },
      { name: "前进转弯最大速度", value: "200" },
      { name: "后退转弯最大速度", value: "200" },
      { name: "转弯速度下限", value: "200" },
      { name: "前进停车纵向进度补偿值", value: "200" },
    ]);
  const [PositioningParameterData, setPositioningParameterData] = useState([
    { name: "叉臂抬升速度上限值", value: "200" },
    { name: "叉臂抬升速度下限值", value: "200" },
    { name: "叉臂下降速度上限值", value: "200" },
    { name: "叉臂下降速度下限值", value: "200" },
    { name: "叉臂可动作区间-叉臂高度下限", value: "200" },
    { name: "叉臂可动作区间-叉臂高度上限", value: "200" },
  ]);
  const [PeripheralParametersData, setPeripheralParametersData] = useState({
    PORT: "43",
    PORTs: "33",
    PORTa: false,
  });
  const [RcsData, setRcsData] = useState({
    IP: "192.168.1.203",
    PORT: "6203",
    PORTs: "1303",
    PORTa: false,
    PORTw: true,
    PORTq: "103",
  });

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeripheralParametersData({
      ...PeripheralParametersData,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRcsData({
      ...RcsData,
      [event.target.name]: event.target.checked,
    });
  };
  function preventHorizontalKeyboardNavigation(event: React.KeyboardEvent) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
    }
  }
  return (
    <Swiper slidesPerView={3} spaceBetween={20}>
      <SwiperSlide>
        <GlobalPanel delay={100} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>行走参数 (单舵)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : VehicleTravelingParametersData &&
                VehicleTravelingParametersData.length ? (
                VehicleTravelingParametersData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={100} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>行走参数 (双舵)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : VehicleTravelingParametersData &&
                VehicleTravelingParametersData.length ? (
                VehicleTravelingParametersData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (堆高车)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (托盘车)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (前移式)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (滚筒)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (夹抱)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (平衡重)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (伸缩叉)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (旋转顶升)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (三向叉)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数 (全向车前移)</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={400} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>外设参数</p>
                )
              }
            />

            <CardContent
              sx={{
                padding: 0,
                paddingTop: "14px",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PeripheralParametersData &&
                Object.keys(PeripheralParametersData).length ? (
                Object.keys(PeripheralParametersData).map((item) =>
                  typeof PeripheralParametersData[item] === "boolean" ? (
                    <div className="SwitchDiv">
                      <div className="SwitchLable">{item}</div>
                      <div>
                        <Switch
                          checked={PeripheralParametersData[item]}
                          onChange={handleChanges}
                          defaultChecked
                          name={item}
                          sx={{
                            width: "110px",
                            height: "45px",
                            padding: 0,
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "inline-block" }}>
                      <div className="numberLable">{item}</div>
                      <div className="" style={{ height: "310px" }}>
                        <Slider
                          sx={{
                            width: "12px",
                            "& .MuiSlider-rail ": {
                              color: "#ffffff33",
                            },
                            "& .MuiSlider-thumb ": {
                              border: "5px solid rgb(255, 255, 255)",
                              width: "35px",
                              height: "35px",
                            },
                            '& input[type="range"]': {
                              WebkitAppearance: "slider-vertical",
                            },
                          }}
                          orientation="vertical"
                          defaultValue={30}
                          aria-label="Temperature"
                          valueLabelDisplay="auto"
                          onKeyDown={preventHorizontalKeyboardNavigation}
                        />
                      </div>
                    </div>
                  )
                )
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={550} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>RCS参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : RcsData && Object.keys(RcsData).length ? (
                Object.keys(RcsData).map((item, value) =>
                  typeof RcsData[item] === "boolean" ? (
                    <div className="SwitchDiv">
                      <div className="SwitchLable">{item}</div>
                      <div>
                        <Switch
                          checked={RcsData[item]}
                          onChange={handleChange}
                          defaultChecked
                          name={item}
                          sx={{
                            width: "110px",
                            height: "45px",
                            padding: 0,
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="numberLable">{item}</div>
                      <div className="numberInput">
                        <div className="number">{RcsData[item]}</div>
                        <EditIcon isActive></EditIcon>
                      </div>
                    </div>
                  )
                )
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>FTP参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>叉臂逻辑参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>天眼视觉参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>扫码参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>驱动器参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>充电参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>定位参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>反光板参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>安全参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide style={{}}>
        <GlobalPanel delay={700} sx={{ height: "100%", width: "100%" }}>
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardHeader
              title={
                loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <p style={{ padding: 0, margin: 0 }}>视觉参数</p>
                )
              }
            />

            <CardContent sx={{ padding: 0, paddingTop: "14px" }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : PositioningParameterData &&
                PositioningParameterData.length ? (
                PositioningParameterData.map((item) => (
                  <div>
                    <div className="numberLable">{item.name}</div>
                    <div className="numberInput">
                      <div className="number">{item.value}</div>
                      <EditIcon isActive></EditIcon>
                    </div>
                  </div>
                ))
              ) : null}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
    </Swiper>
  );
};

export default Settings;
