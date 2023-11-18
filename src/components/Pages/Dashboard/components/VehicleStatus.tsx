import { memo, useEffect, useRef, useState } from "react";

import { Box, Divider, Stack } from "@mui/material";
import SpeedCtrlIcon from "@/components/SvgIcon/SpeedCtrlIcon";
import Line from "./Line";
import vehicleImg from "@/assets/velicle.png";
import { StyleBox, WaveBox, Item, AnimateBox, RadioBox } from "./Styles";
import { animated, useSpring } from "@react-spring/web";
import AutoIcon from "@/components/SvgIcon/AutoIcon";
import SemiAutoIcon from "@/components/SvgIcon/SemiAutoIcon";
import HandMoveIcon from "@/components/SvgIcon/HandMoveIcon";
import WarmingIcon from "@/components/SvgIcon/WarmingIcon";
import ErrorIcon from "@/components/SvgIcon/ErrorIcon";

const VehicleStatus = memo(() => {
  const rotateZ = useRef(0);
  const [value, setValue] = useState(0);
  const [styles, api] = useSpring(() => ({
    from: {
      transform:
        "perspective(400px) rotateX(45deg) rotateY(0deg) rotateZ(0deg)",
    },
    to: {
      transform: `perspective(400px) rotateX(45deg) rotateY(0deg) rotateZ(${rotateZ}deg)`,
    },
    config: {
      tension: 10,
      friction: 20,
      duration: 100,
    },
  }));

  useEffect(() => {
    api.start({
      from: {
        transform: `perspective(400px) rotateX(45deg) rotateY(0deg) rotateZ(${rotateZ.current}deg)`,
      },
      to: {
        transform: `perspective(400px) rotateX(45deg) rotateY(0deg) rotateZ(${value}deg)`,
      },
      config: {
        tension: 10,
        friction: 20,
        duration: 100,
      },
      onRest: () => {
        rotateZ.current = value;
      },
    });
  }, [value]);

  return (
    <>
      <StyleBox>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div className="speed-box">
            <h1 className="speed">
              0.234 <span>m/s</span>
            </h1>
            <p style={{ color: "#FFA200" }}>
              <WarmingIcon />
            </p>
          </div>
          <div className="speed-box">
            <h1 className="speed-control">
              <SpeedCtrlIcon sx={{ marginRight: "6px" }} />
              0.234 <span>m/s</span>
            </h1>
            <p style={{ color: "red" }}>
              <ErrorIcon />
            </p>
          </div>
          <Divider sx={{ marginBlock: "20px" }} />
        </Box>
        <Box
          sx={{
            flex: 1,
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <Stack
            sx={{
              background: "rgb(255 255 255 / 10%)",
              borderRadius: "8px",
            }}
            direction={"row"}
            spacing={0}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Item>X: 4322mm</Item>
            <Item>Y: 4322mm</Item>
            <Item>Theta: 270°</Item>
          </Stack>
          <AnimateBox style={styles}>
            <WaveBox></WaveBox>
            <WaveBox delay={-2}></WaveBox>
            <Line></Line>
            <Line direction="flex-end"></Line>
            <img
              src={vehicleImg}
              style={{
                width: "60%",
                position: "relative",
                top: "10%",
              }}
              alt=""
            />
          </AnimateBox>
        </Box>
        <Box>
          {/* 车辆状态 <Button onClick={() => setValue(value + 2)}>+20</Button> */}
          <Stack direction={"row"} spacing={1.25}>
            <RadioBox>
              <AutoIcon />
              AUTO
            </RadioBox>
            <RadioBox active>
              <SemiAutoIcon />
              Semi-Auto
            </RadioBox>
            <RadioBox>
              <HandMoveIcon />
              Manual
            </RadioBox>
          </Stack>
        </Box>
      </StyleBox>
    </>
  );
});

export default VehicleStatus;
