import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import { keyframes } from "@emotion/react";

// 修改LinearProgress主题色
const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  "&.MuiLinearProgress-root": {
    backgroundColor: "#00ffff", // 使用 theme.palette.primary.main 替换空字符串
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
  },
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "#00D1D1",
  },
}));
// 添加全局 keyframes 定义
const l23 = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const StyledBox = styled(Box)({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  // 设置背景颜色，黑色，透明度0.3
  background: "rgba(0,0,0,0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
const Loading = styled("div")(({ theme }) => ({
  width: "50px",
  aspectRatio: 1,
  display: "grid",
  borderRadius: "50%",
  background: `linear-gradient(0deg, ${theme.palette.primary.dark} 30%, #0000 0 70%, ${theme.palette.primary.main} 0) 50%/8% 100%, linear-gradient(90deg, ${theme.palette.primary.light} 30%, #0000 0 70%, ${theme.palette.primary.dark} 0) 50%/100% 8%`,
  backgroundRepeat: "no-repeat",
  animation: `${l23} 1s infinite steps(8)`,
  "&::after": {
    content: "''",
    gridArea: "1/1",
    borderRadius: "50%",
    background: "inherit",
    opacity: "0.915",
    transform: "rotate(45deg)",
  },
  //   "&::after": {
  //     opacity: "0.83",
  //     transform: "rotate(60deg)",
  //   },
}));

const PageLoading = () => {
  return (
    <>
      <StyledLinearProgress color="primary" />
      <StyledBox>
        <Loading></Loading>
      </StyledBox>
    </>
  );
};
export default PageLoading;
