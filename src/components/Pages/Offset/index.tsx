import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
  IconButton,
  styled,
  Box,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import EditIcon from "../../SvgIcon/EditIcon";
import DeleteIcon from "../../SvgIcon/DeleteIcon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GlobalPanel from "../../GlobalPanel";
import SecondaryPage from "@/components/SecondaryPage";
const Settings = () => {
  const [loading, setLoading] = React.useState(false);
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
  function createData(
    Status: number,
    Input: String,
    Address: number,
    isNegation: number
  ) {
    return { Status, Input, Address, isNegation };
  }

  const rows = [
    createData(1, "1", 6.0, 24),
    createData(2, "2", 9.0, 37),
    createData(3, "3", 16.0, 24),
    createData(4, "4", 3.7, 67),
    createData(5, "1", 16.0, 49),
    createData(6, "2", 16.0, 49),
    // createData(7, "3", 16.0, 49),
    // createData(8, "3", 16.0, 49),
    // createData(9, "3", 16.0, 49),
    // createData(0, "3", 16.0, 49),
    // createData(1, "3", 16.0, 49),
  ];
  const [open, setOpen] = React.useState(false);
  return (
    <Swiper slidesPerView={1} spaceBetween={20}>
      <SwiperSlide>
        <GlobalPanel
          delay={100}
          sx={{ height: "100%", width: "100%", paddingTop: "0px" }}
        >
          <Card
            variant="outlined"
            sx={{ height: "100%", background: "transparent", border: 0 }}
          >
            <CardContent sx={{ padding: 0 }}>
              {loading ? (
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              ) : (
                <Table
                  stickyHeader
                  sx={{
                    "& .MuiTableCell-root": {
                      background: "#3330",
                      fontSize: "20px",
                      color: "#fff",
                      borderBottomColor: "rgb(216 216 216 / 20%)",
                    },
                    "& .MuiTableCell-body": {
                      color: "#fff",

                      py: "22px",
                    },
                    "& .MuiTableCell-head": {
                      color: "#ffffff80",
                      paddingTop: "24px",
                      paddingBottom: "18px",
                    },
                  }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">序号</TableCell>
                      <TableCell align="center">点号</TableCell>
                      <TableCell align="center">X坐标</TableCell>
                      <TableCell align="center">Y坐标</TableCell>
                      <TableCell align="center" style={{ width: "270px" }}>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <span>操作</span>
                          <Button
                            variant="contained"
                            sx={{
                              color: "#fff",
                              backgroundColor: "#00D1D1",
                              borderRadius: "5px",
                              fontSize: "20px",
                              padding: "0px 30px",
                              height: "35px",
                            }}
                            onClick={() => {
                              setOpen(true);
                            }}
                          >
                            新增
                          </Button>
                        </Box>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index} sx={{}}>
                        <StatusCell align="center">{row.Status}</StatusCell>
                        <InputCell align="center">{row.Input}</InputCell>
                        <TableCell align="center">{row.Address}</TableCell>
                        <TableCell align="center">{row.isNegation}</TableCell>
                        <TableCell align="center">
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                            }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                color: "#fff",
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                fontSize: "20px",
                                padding: "4px 36px",
                                ":hover": {
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                },
                              }}
                              onClick={() => {
                                setOpen(true);
                                console.log(row);
                              }}
                            >
                              <EditIcon fontSize={25} />
                            </Button>
                            <span
                              style={{
                                width: 0,
                                height: "35px",
                                opacity: 0.2,

                                border: "1px solid #D8D8D8",
                              }}
                            ></span>
                            <Button
                              variant="contained"
                              sx={{
                                color: "#fff",
                                backgroundColor: "transparent",
                                boxShadow: "none",
                                fontSize: "20px",
                                padding: "4px 36px",
                                ":hover": {
                                  backgroundColor: "transparent",
                                  boxShadow: "none",
                                },
                              }}
                            >
                              <DeleteIcon fontSize={25} />
                            </Button>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </GlobalPanel>
      </SwiperSlide>
      <SecondaryPage open={open} setOpen={setOpen}></SecondaryPage>
    </Swiper>
  );
};

export default Settings;
