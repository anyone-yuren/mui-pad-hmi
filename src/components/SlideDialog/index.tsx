import { useSpring, animated } from "@react-spring/web";
import { Box, BoxProps, styled } from "@mui/material";
import { memo } from "react";
import { useGlobaltore } from "../../store/global";

const SlideBox = styled(animated(Box))(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: theme.zIndex.drawer + 1,
  padding: theme.spacing(2.5),
  background: "#162640",
}));
type Props = {
  children?: JSX.Element | JSX.Element[];
  open?: boolean;
  setOpen?: (open: any) => void;
} & BoxProps;

const AnimateDialog = (props: Props) => {
  const { points } = useGlobaltore((state) => state);
  const { children, open, setOpen, ...rest } = props;
  const animate = useSpring({
    opacity: open ? 1 : 0,
    transform: open ? "scale(1)" : "scale(0)",
    transformOrigin: `${points.x}px ${points.y}px`,
    // zIndex: open ? 1 : -1,
    config: { tension: 200, friction: 30 },
  });
  return (
    <SlideBox {...rest} style={animate}>
      {children}
    </SlideBox>
  );
};
export default memo(AnimateDialog);
