import { memo, useState } from "react";
import { Typography, Box, Stack, Divider } from "@mui/material";
import { ColumnBox, RowBox } from "@/components/GlobalStyles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ExecutingIcon, LoadingIcon, AlignStack, ListStack } from "./Styles";
const TaskStatus = memo((props: any) => {
  const [List, setList] = useState([
    {
      rroute: "3121",
      state: 1,
      forkTeeth: 1,
    },
    {
      rroute: "241",
      state: 2,
      forkTeeth: 1,
    },
    {
      rroute: "241",
      state: 1,
      forkTeeth: 2,
    },
    {
      rroute: "3121",
      state: 1,
      forkTeeth: 1,
    },
    {
      rroute: "241",
      state: 2,
      forkTeeth: 1,
    },
    {
      rroute: "241",
      state: 1,
      forkTeeth: 2,
    },
    {
      rroute: "3121",
      state: 1,
      forkTeeth: 1,
    },
    {
      rroute: "241",
      state: 2,
      forkTeeth: 1,
    },
    {
      rroute: "241",
      state: 1,
      forkTeeth: 2,
    },
    {
      rroute: "241",
      state: 1,
      forkTeeth: 2,
    },
    {
      rroute: "3121",
      state: 1,
      forkTeeth: 1,
    },
    {
      rroute: "241",
      state: 2,
      forkTeeth: 1,
    },
    {
      rroute: "241",
      state: 1,
      forkTeeth: 2,
    },
  ]);
  return (
    <ColumnBox sx={{ overflow: "hidden" }}>
      <Typography sx={{ fontSize: "20px" }} variant="h5">
        Tasks and Status
      </Typography>
      <ColumnBox sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginBlock: "64px",
          }}
        >
          <ExecutingIcon />
          Executing
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginBottom: "36px",
          }}
        >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4">5766</Typography>
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              No.1
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4">345</Typography>
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              Point
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4">GET</Typography>
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              Type
            </Typography>
          </Box>
        </Stack>
        <Divider />
        {/* 底部列表 */}
        <ColumnBox sx={{ height: "auto" }}>
          <AlignStack direction="row" spacing={2}>
            <Typography sx={{ lineHeight: "45px" }} variant="body1">
              Route
            </Typography>
            <Typography sx={{ lineHeight: "45px" }} variant="body1">
              State
            </Typography>
            <Typography sx={{ lineHeight: "45px" }} variant="body1">
              Fork Teeth
            </Typography>
          </AlignStack>
        </ColumnBox>
        <ColumnBox sx={{ flex: 1, marginBottom: "24px", overflowY: "auto" }}>
          {List.map((item, index) => {
            return (
              <ListStack>
                <AlignStack
                  direction="row"
                  spacing={2}
                  sx={{ alignItems: "center" }}
                >
                  <Typography sx={{ lineHeight: "45px" }} variant="h6">
                    {item.rroute}
                  </Typography>
                  <Typography sx={{ lineHeight: "45px" }} variant="h6">
                    {item.state === 1 ? (
                      <ExecutingIcon width={"8px"} />
                    ) : (
                      <CheckCircleIcon color="primary" />
                    )}
                  </Typography>
                  <Typography sx={{ lineHeight: "45px" }} variant="h6">
                    {item.forkTeeth === 1 ? (
                      <ExecutingIcon width={"8px"} />
                    ) : (
                      <LoadingIcon width="24px" />
                    )}
                  </Typography>
                </AlignStack>
              </ListStack>
            );
          })}
        </ColumnBox>
      </ColumnBox>
    </ColumnBox>
  );
});
export default TaskStatus;
