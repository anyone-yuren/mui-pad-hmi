import { Box, BoxProps, styled } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import React, { memo } from "react";

import { useGlobaltore } from "../../store/global";

interface IProps extends BoxProps {
  delay?: number;
  direction?: string;
}
const StylePanel = styled(animated(Box))(({ theme }) => ({
  backgroundColor: "#445260",
  borderRadius: "20px",
  padding: "20px",
  height: "100%",
}));

const GlobalPanel = ({
  delay = 3000,
  direction = "left",
  children,
  ...rest
}: IProps) => {
  const { dialogOpen } = useGlobaltore((state) => state);
  const [animated, setAnimated] = React.useState(false);
  React.useEffect(() => {
    setAnimated(dialogOpen);
  }, [dialogOpen]);
  const animate = useSpring({
    opacity: animated ? 1 : 0,
    transform: animated
      ? `${
          direction === "left"
            ? "translateX(0px) scale(1) rotateY(0deg)"
            : "translateY(0px) scale(1) rotateY(0deg)"
        }`
      : `${
          direction === "left"
            ? "translateX(100px) scale(0.9) rotateY(10deg)"
            : "translateY(200px) scale(0.9) rotateY(10deg)"
        }`,
    delay,
    config: { tension: 100, friction: 30 },
  });
  return (
    <StylePanel style={animate} {...rest}>
      {children}
    </StylePanel>
  );
};
export default memo(GlobalPanel);
