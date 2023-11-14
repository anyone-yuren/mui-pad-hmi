import React, { useState, useEffect, useCallback, useMemo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import DownloadIcon from "../../SvgIcon/DownloadIcon";
import GlobalPanel from "../../GlobalPanel";
import {
  Paper,
  styled,
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton,
  Button,
} from "@mui/material";
import { Radio, Upload, message } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const Settings = () => {
  const ItemTitle = styled("div")(({ theme }) => ({
    fontFamily: "MicrosoftYaHei-Bold",
    color: "#fff",
    fontSize: "30px",
    margin: "16px 0",
  }));
  const ItemTitleF = styled("div")(({ theme }) => ({
    opacity: 0.5,
    textAlign: "left",
    fontSize: "18px",
    color: "#FFFFFF",
    margin: "9px 0",
  }));
  const [fileTypeData, setFileTypeData] = useState([
    {
      fileType: "日志文件",
    },
    {
      fileType: "配置文件",
    },
    {
      fileType: "程序文件",
    },
    {
      fileType: "库文件",
    },
    {
      fileType: "以上所有文件",
    },
  ]);
  const FileTypeListDom = useMemo(() => {
    return fileTypeData?.map((item: Array, index: number) => {
      return (
        <ListItem
          sx={{
            margin: " 0 0 10px",
            background: "rgb(216 216 216 / 20%)",
            padding: " 12px 14px",
            borderRadius: "5px",
            ".MuiListItemText-primary": {
              fontSize: "18px",
            },
            ".MuiListItemText-secondary": {
              fontSize: "18px",
              color: "#fff",
            },
            ".MuiListItemIcon-root": {
              minWidth: "30px",
            },
          }}
        >
          <ListItemText sx={{}} secondary={item.fileType} />
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
        </ListItem>
      );
    });
  }, []);
  const [nodeData, setNodeData] = useState([
    {
      fileType: "节点1",
    },
    {
      fileType: "节点2",
    },
    {
      fileType: "节点3",
    },
    {
      fileType: "节点4",
    },
    {
      fileType: "节点5",
    },
  ]);
  const nodeListDom = useMemo(() => {
    return nodeData?.map((item: Array, index: number) => {
      return (
        <ListItemButton
          sx={{
            padding: 0,
            margin: "0px",
          }}
        >
          <ListItemText
            sx={{
              margin: " 0",
              background: "rgb(216 216 216 / 20%)",
              padding: " 12px 14px",
              borderBottom: "1px solid #333",
              ".MuiListItemText-primary": {
                fontSize: "18px",
              },
              ".MuiListItemText-secondary": {
                fontSize: "18px",
                color: "#fff",
              },
            }}
            secondary={item.fileType}
          />
        </ListItemButton>
      );
    });
  }, []);
  const FileTypeList = useMemo(() => {
    return (
      <>
        <List
          sx={{
            width: "100%",
            bgcolor: "transparent",
            overflow: "auto",
            padding: 0,
          }}
        >
          {FileTypeListDom}
        </List>
      </>
    );
  }, [fileTypeData]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleUpload = () => {
    const formData = {};
    fileList.forEach((file) => {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (res) => {
        formData.data = reader.result;
        formData.filename = file.name;

        console.log(formData);
      };
    });
  };

  const props: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);

      return false;
    },
    fileList,
  };
  return (
    <Swiper slidesPerView={3} spaceBetween={20}>
      <SwiperSlide>
        <GlobalPanel
          delay={100}
          sx={{
            height: "100%",
            width: "100%",
            "&& .ant-radio-button-wrapper:not(:first-child)::before": {
              backgroundColor: "transparent",
            },
            "&& .ant-radio-group": {
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "flex-start",
              fontSize: "18px",
            },
            "&& .ant-radio-button-wrapper": {
              boxSizing: "border-box",
              border: "2px solid rgb(216 216 216 / 20%)",
              borderRadius: "5px",
              backgroundColor: "#445260",
              color: "#FFFFFF",
              fontSize: "18px",
              height: "100%",
              lineHeight: 1,
              padding: "12px 13px",
              margin: "0 10px 10px 0",
            },
            "&& .ant-radio-button-wrapper:hover": {
              backgroundColor: "#00D1D1",
            },
            "&& .ant-upload": {
              width: "100%",
            },
          }}
        >
          <ItemTitle>文件上传</ItemTitle>
          <ItemTitleF>文件类型：</ItemTitleF>
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="a">程序文件</Radio.Button>
            <Radio.Button value="b">库文件</Radio.Button>
            <Radio.Button value="c">配置文件</Radio.Button>
            <Radio.Button value="d">Deb安装包</Radio.Button>
          </Radio.Group>
          <ItemTitleF>上传文件：</ItemTitleF>
          <Upload maxCount={1} {...props} style={{ width: "100%" }}>
            <Button
              sx={{
                width: "100%",
                height: "45px",
                margin: "12px 0 10px",
                backgroundColor: "rgba(216, 216, 216, 0.2)",
                boxSizing: "border-box",
                border: "none",
                color: "#fff",
                fontSize: "18px",
              }}
            >
              <DownloadIcon />
              <span style={{ marginLeft: "10px" }}>点击选择文件</span>
            </Button>
          </Upload>

          <Button
            sx={{
              width: "110px",
              height: "110px",
              margin: "30px 0 10px",
              background: "rgba(216, 216, 216, 0.2)",

              boxSizing: "border-box",
              border: "2px solid #00D1D1",
              color: "#00D1D1",
              fontSize: "30px",
              borderRadius: "50%",
            }}
            onClick={handleUpload}
          >
            <span>确定</span>
          </Button>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={250} sx={{ height: "100%", width: "100%" }}>
          <ItemTitle>文件下载</ItemTitle>
          <ItemTitleF>文件类型：</ItemTitleF>
          {FileTypeList}
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel delay={400} sx={{ height: "100%", width: "100%" }}>
          <ItemTitle>节点程序的启动和停止</ItemTitle>
          <ItemTitleF>请选择一个节点：</ItemTitleF>
          <List
            sx={{
              width: "100%",
              bgcolor: "transparent",
              overflow: "auto",
              borderRadius: "5px",
              padding: 0,
            }}
          >
            {nodeListDom}
          </List>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              sx={{
                width: "110px",
                height: "110px",
                margin: "30px 0 10px",
                background: "rgba(216, 216, 216, 0.2)",

                boxSizing: "border-box",
                border: "2px solid #00D1D1",
                color: "#00D1D1",
                fontSize: "30px",
                borderRadius: "50%",
              }}
            >
              <span>启动</span>
            </Button>
            <Button
              sx={{
                width: "110px",
                height: "110px",
                margin: "30px 0 10px",
                background: "rgba(216, 216, 216, 0.2)",

                boxSizing: "border-box",
                border: "2px solid #D3D3D3",
                color: "#D3D3D3",
                fontSize: "30px",
                borderRadius: "50%",
              }}
            >
              <span>停止</span>
            </Button>
          </div>
        </GlobalPanel>
      </SwiperSlide>
    </Swiper>
  );
};

export default Settings;
