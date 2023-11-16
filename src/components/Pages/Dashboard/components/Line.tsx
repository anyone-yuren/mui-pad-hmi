import React from "react";
import { useSprings, animated } from "@react-spring/web";
import { Box, styled } from "@mui/material";
import useItems from "antd/es/menu/hooks/useItems";

const Item = styled(animated(Box))(({ theme }) => ({
  width: "6px !important",
  height: "30px",
  borderRadius: "3px",
  backgroundColor: theme.palette.primary.main,
}));
const Line = (props) => {
  const { direction = "flex-start" } = props;
  const items = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item1",
    "item2",
    "item3",
    "item4",
    "item1",
    "item2",
    "item3",
    "item4",
    "item1",
    "item2",
  ];
  const springs = useSprings(
    items.length,
    items.map((item, index) => ({
      opacity: index > 7 ? (14 - index) * 0.1 - 0.1 : index * 0.1 + 0.1,
      delay: index * 100,
      transform: "scale(0.8)",
      from: {
        opacity: 1,
        transform: "scale(0.4)",
      },
      config: {
        tension: 500,
        friction: 10,
      },
      reset: true,
      onRest: () => {},
    }))
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          padding: "0 40px",
          top: "-10%",
          alignItems: direction,
        }}
      >
        {springs.map((style, index) => (
          <Item key={index} style={style}></Item>
        ))}
      </Box>
    </>
  );
};
export default Line;
