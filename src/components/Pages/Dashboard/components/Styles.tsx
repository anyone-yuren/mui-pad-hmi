import { styled, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import { animated } from "@react-spring/web";
export const StyleBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  "& div": {
    width: "100%",
  },
  "& .speed-box": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  "& .speed": {
    fontSize: theme.spacing(8),
    whiteSpace: "nowrap",
    letterSpacing: "-2px",
    padding: "0px",
    margin: "0px",
    fontFamily: "serif",
    "& span": {
      fontSize: "26px",
      opacity: 0.8,
    },
  },
  "& .speed-control": {
    fontSize: theme.spacing(3),
    whiteSpace: "nowrap",
    lineHeight: "28px",
    padding: "0px",
    margin: "0px",
    fontFamily: "serif",
    "& span": {
      opacity: 0.8,
    },
  },
}));
type IWaveBox = {
  delay?: number;
};
export const WaveBox = styled(Box)<IWaveBox>(({ theme, delay = 0 }) => ({
  width: "200px !important",
  height: "200px",
  left: "50%",
  top: "10%",
  marginLeft: "-100px",
  borderRadius: "50%",
  position: "absolute",
  "&:before, &:after": {
    content: "''",
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: "-60px",
    marginTop: "-60px",
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "1px solid #fff",
    animation: `${wave} 4s linear infinite`,
    animationDelay: `${delay}s`,
  },
  "&:after": {
    animationDelay: `${delay - 1}s`,
  },
}));

export const wave = keyframes`
    0% {
      transform: scale(1);
      transformOrigin: 50% 50%;
      opacity: 1;
    }
    100% {
      transform: scale(2.5);
      transformOrigin: 50% 50%;
      opacity: 0;
    }
  `;

export const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const AnimateBox = styled(animated(Box))(({ theme }) => ({
  position: "relative",
  flex: 1,
  display: "flex",
  scale: "1.3",
  alignItems: "flex-start",
  justifyContent: "space-around",
  transform: "perspective(400px) rotateX(45deg) rotateY(0deg) rotateZ(0deg)",
}));

type RadioBoxProps = {
  active?: boolean;
};
export const RadioBox = styled(Box)<RadioBoxProps>(({ theme, active }) => ({
  width: "100%",
  height: "85px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: active ? "white" : "",
  borderRadius: "5px",
  border: active ? "none" : "1px solid #fff",
  color: active ? "black" : "white",
  fontSize: "16px",
  flexDirection: "column",
  animation: active ? "bg 2s ease-in-out infinite" : "none",
  "@keyframes bg": {
    "0%": {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
    "50%": {
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
    "100%": {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  },
}));
