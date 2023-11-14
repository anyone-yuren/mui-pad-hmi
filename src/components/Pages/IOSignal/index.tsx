import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import GlobalPanel from "../../GlobalPanel";
import {
  styled,
  Box,
  Paper,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
const Settings = () => {
  function createData(
    Status: number,
    Input: String,
    Address: number,
    isNegation: number
  ) {
    return { Status, Input, Address, isNegation };
  }
  const StatusCell = styled(TableCell)(({ theme }) => ({
    textAlign: "center",
    textAlign: "-webkit-center",
  }));
  const InputCell = styled(TableCell)(({ theme }) => ({
    "&& p": {
      margin: "0px",
    },
    "&& span": {
      fontSize: "18px",
      opacity: 0.5,
    },
  }));
  const SuccessDiv = styled("div")(({ theme }) => ({
    width: "20px",
    height: "20px",
    background: "#0FB200",
    border: "1px solid #fff",
    borderRadius: "20px",
  }));
  const ErrDiv = styled("div")(({ theme }) => ({
    width: "20px",
    height: "20px",
    background: "#FF0000",
    border: "1px solid #fff",
    borderRadius: "20px",
  }));
  const rows = [
    createData(1, "左尖部光电", 6.0, 24),
    createData(1, "中部光电", 9.0, 37),
    createData(1, "上限位", 16.0, 24),
    createData(1, "下限位", 3.7, 67),
    createData(0, "前避障停止区", 16.0, 49),
    createData(0, "安全触边", 16.0, 49),
    createData(0, "安全触边", 16.0, 49),
    createData(0, "安全触边", 16.0, 49),
    createData(0, "安全触边", 16.0, 49),
    createData(0, "安全触边", 16.0, 49),
    createData(0, "安全触边", 16.0, 49),
    createData(0, "安全触边", 16.0, 49),
  ];
  return (
    <Swiper slidesPerView={2} spaceBetween={20}>
      <SwiperSlide>
        <GlobalPanel
          delay={100}
          sx={{
            height: "100%",
            width: "100%",
            overflow: "auto",
            padding: "0 20px",
          }}
        >
          <Table
            stickyHeader
            aria-label="simple table"
            sx={{
              "& .MuiTableCell-root": {
                fontSize: "20px",
                color: "#fff",
                borderBottomColor: "rgb(216 216 216 / 20%)",
                padding: "11px",
              },

              "& .MuiTableCell-head": {
                color: "rgb(255 255 255 / 50%)",
                backgroundColor: "#445260",
                padding: "25px 10px 20px",
                lineHeight: "inherit",
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Status</TableCell>
                <TableCell align="left" sx={{ color: "#FFE500!important" }}>
                  Input
                </TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">isNegation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <StatusCell align="center">
                    {row.Status && row.Status == 1 ? (
                      <SuccessDiv />
                    ) : (
                      <ErrDiv />
                    )}
                  </StatusCell>
                  <InputCell align="left">
                    <p>{row.Input}</p>
                    <span>{row.Input}</span>
                  </InputCell>
                  <TableCell align="center">{row.Address}</TableCell>
                  <TableCell align="center">{row.isNegation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlobalPanel>
      </SwiperSlide>
      <SwiperSlide>
        <GlobalPanel
          delay={100}
          sx={{
            height: "100%",
            width: "100%",
            overflow: "auto",
            padding: "0 20px",
          }}
        >
          <Table
            stickyHeader
            aria-label="simple table"
            sx={{
              "& .MuiTableCell-root": {
                fontSize: "20px",
                color: "#fff",
                borderBottomColor: "rgb(216 216 216 / 20%)",
                padding: "11px",
              },
              "& .MuiTableCell-head": {
                color: "rgb(255 255 255 / 50%)",
                backgroundColor: "#445260",
                padding: "25px 10px 20px",
                lineHeight: "inherit",
              },
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Status</TableCell>
                <TableCell align="left" sx={{ color: "#FFE500!important" }}>
                  Output
                </TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">isNegation</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <StatusCell align="center">
                    {row.Status && row.Status == 1 ? (
                      <SuccessDiv />
                    ) : (
                      <ErrDiv />
                    )}
                  </StatusCell>
                  <InputCell align="left">
                    <p>{row.Input}</p>
                    <span>{row.Input}</span>
                  </InputCell>
                  <TableCell align="center">{row.Address}</TableCell>
                  <TableCell align="center">{row.isNegation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </GlobalPanel>
      </SwiperSlide>
    </Swiper>
  );
};

export default Settings;
