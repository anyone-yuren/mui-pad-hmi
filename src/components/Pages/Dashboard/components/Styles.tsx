import { styled, Box, Stack } from "@mui/material";
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
type LoadingProp = {
  width?: string;
};

export const ExecutingIcon = styled("div")<LoadingProp>(
  ({ theme, width = "10px" }) => ({
    width: width,
    aspectRatio: 1,
    borderRadius: "50%",
    background: "#fff",
    display: "grid",
    animation: `l22_0 2s infinite linear`,
    "&:before, &:after": {
      content: "''",
      gridArea: "1/1",
      margin: "15%",
      borderRadius: "50%",
      background: "inherit",
      transform: "rotate(0deg) translate(150%)",
      animation: `l22 1s infinite`,
    },
    "&:after": {
      animationDelay: "-.5s",
    },
    "@keyframes l22": {
      "100%": {
        transform: "rotate(1turn) translate(150%)",
      },
    },
    "@keyframes l22_0": {
      "100%": {
        transform: "rotate(1turn)",
      },
    },
  })
);
export const LoadingIcon = styled("div")<LoadingProp>(
  ({ theme, width = "30px" }) => ({
    width: width,
    aspectRatio: 1,
    display: "grid",
    borderRadius: "50%",
    background:
      "linear-gradient(0deg ,rgb(255 255 255/50%) 30%,#0000 0 70%,rgb(255 255 255/100%) 0) 50%/8% 100%,linear-gradient(90deg,rgb(255 255 255/25%) 30%,#0000 0 70%,rgb(255 255 255/75% ) 0) 50%/100% 8%",
    backgroundRepeat: "no-repeat",
    animation: "l23 1s infinite steps(12)",
    "@keyframes l23": {
      "100%": {
        transform: "rotate(1turn)",
      },
    },
    "&:before, &:after": {
      content: "''",
      gridArea: "1/1",
      borderRadius: "50%",
      background: "inherit",
      opacity: 0.915,
      transform: "rotate(30deg)",
    },
    "&:after": {
      opacity: 0.83,
      transform: "rotate(60deg)",
    },
  })
);

export const AlignStack = styled(Stack)(({ theme }) => ({
  textAlign: "center",
  justifyContent: "space-around",
  "& .MuiTypography-root": {
    flex: 1,
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

export const ListStack = styled(AlignStack)(({ theme }) => ({
  backgroundColor: "#D8D8D820",
  borderRadius: "5px",
  marginBottom: "10px",
}));
