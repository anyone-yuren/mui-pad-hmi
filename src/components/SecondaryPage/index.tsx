import { useSpring, animated } from "@react-spring/web";
import { Box, BoxProps, styled, IconButton } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useGlobaltore } from "../../store/global";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
  open: boolean;
  setOpen: (open: any) => void;
  startAnimate?: (start: boolean) => void;
} & BoxProps;

const SecondaryPage = (props: Props) => {
  const { children, open, setOpen, startAnimate, ...rest } = props;
  const [start, setStart] = useState(false);
  const setSecondaryPage = useGlobaltore((state) => state.setSecondaryPage);
  useEffect(() => {
    if (open) {
      setStart(true);
    }
  }, [open]);
  const animate = useSpring({
    opacity: start ? 1 : 0,
    transform: start ? "translateX(0%)" : "translateX(100%)",
    // transformOrigin: `${points.x}px ${points.y}px`,
    // zIndex: open ? 1 : -1,
    config: { tension: 260, friction: 40 },
    onRest: () => {
      if (!start) {
        setOpen(false);
      }
    },
  });
  return (
    <SlideBox {...rest} style={animate}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            background: "#fff !important",
            color: "#000 !important",
            marginRight: "8px",
          }}
          aria-label="back"
          size="medium"
          onClick={() => {
            setStart(false);
            setSecondaryPage(false);
            startAnimate && startAnimate(false);
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        返回
      </Box>
      {children}
    </SlideBox>
  );
};
export default memo(SecondaryPage);
