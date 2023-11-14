import { useTranslation } from "react-i18next";
// 暂无数据
import Empty from "../SvgIcon/Empty";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyleBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

interface IEmptyProps {
  title?: string | React.ReactNode;
  backgroundColor?: string;
}

const EmptyBox = (props: IEmptyProps) => {
  const { title, backgroundColor } = props;
  return (
    <StyleBox
      sx={{
        textAlign: "center",
        marginTop: "-55px",
        backgroundColor: backgroundColor || "#fff",
      }}
    >
      <Empty />
      <span
        style={{
          fontSize: "16px",
          color: " #FFFFFF",
          opacity: 0.5,
          marginTop: "10px",
        }}
      >
        {title || "暂无数据"}
      </span>
    </StyleBox>
  );
};

export default EmptyBox;
