import {
  Box,
  BoxProps,
  ListItemButton,
  styled,
  Typography,
} from "@mui/material";
import { memo, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
interface IAppBoxProps extends BoxProps {
  title?: string;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  children: React.ReactNode;
}

const BoxCard = styled(animated(ListItemButton))(({ theme, color }) => ({
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
  },
  //   padding: theme.spacing(2),
  //   borderRadius: theme.spacing(4),
  //   padding: theme.spacing(4),
  // 根据color值设置不同背景颜色
  //   ...(color && {
  //     backgroundColor: theme.palette[color].main,
  //   }),
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: theme.typography.h5.fontSize,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  height: "45px",
  lineHeight: "45px",
  borderRadius: theme.shape.borderRadius + 1,
  marginBlockStart: theme.spacing(2),
  paddingInline: theme.spacing(2),
}));

const AppBox = ({ children, color, title }: IAppBoxProps) => {
  const [loading, setLoading] = useState(false);
  const animate = useSpring({
    opacity: loading ? 0.4 : 1,
    transform: loading ? "scale(1.2)" : "scale(1)",
    transformOrigin: "center",
    config: { tension: 600, friction: 30 },
    onRest: () => {
      setLoading(false);
    },
  });
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <BoxCard
        style={animate}
        color={color}
        onClick={() => {
          setLoading(true);
        }}
      >
        {children}
      </BoxCard>
      {title && <TitleTypography>{title}</TitleTypography>}
    </Box>
  );
};

export default memo(AppBox);
