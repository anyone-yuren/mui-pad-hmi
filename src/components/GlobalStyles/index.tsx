import { styled, Box } from "@mui/material";

export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100%",
}));

export const ColumnBox = styled(FlexBox)(({ theme }) => ({
  flexDirection: "column",
}));

export const RowBox = styled(FlexBox)(({ theme }) => ({
  flexDirection: "row",
}));
