import { memo } from "react";
import { Stack, Typography, Box, Divider } from "@mui/material";
import GlobalPanel from "@/components/GlobalPanel";
import { RowBox } from "@/components/GlobalStyles";
import CarNumberIcon from "@/components/SvgIcon/CarNumberIcon";
import RunTimeIcon from "@/components/SvgIcon/RunTimeIcon";
import SpeedsIcon from "@/components/SvgIcon/SpeedsIcon";
export default memo(() => {
  return (
    <Stack
      direction={"column"}
      sx={{
        height: "100%",
      }}
      spacing={2.5}
    >
      <GlobalPanel delay={0} sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={{ fontSize: "20px" }} variant="h5">
          Goods
        </Typography>
        <RowBox
          sx={{
            alignItems: "center",
            flex: 1,
          }}
        >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4">345</Typography>
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              Quantuty (Pieces)
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4">36</Typography>
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              Weight (KG)
            </Typography>
          </Box>
        </RowBox>
      </GlobalPanel>
      <GlobalPanel delay={0} sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
          variant="h5"
        >
          <span>Fork Position</span>
          <Typography variant="body1" sx={{ opacity: 0.5 }}>
            (Unit: mm)
          </Typography>
        </Typography>
        <RowBox
          sx={{
            alignItems: "center",
            flex: 1,
          }}
        >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4">5</Typography>
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              Horizon (mm)
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4">36</Typography>
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              Forward (mm)
            </Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography variant="h4">36</Typography>
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              Rise (mm)
            </Typography>
          </Box>
        </RowBox>
      </GlobalPanel>
      <GlobalPanel delay={0}>
        <Stack
          direction="column"
          sx={{
            height: "100%",
          }}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <RowBox sx={{ alignItems: "center" }}>
            <CarNumberIcon />
            <Box sx={{ marginLeft: "20px" }}>
              <Typography variant="h4">566</Typography>
              <Typography variant="body1" sx={{ opacity: 0.5 }}>
                Car number
              </Typography>
            </Box>
          </RowBox>
          <RowBox sx={{ alignItems: "center" }}>
            <SpeedsIcon />
            <Box sx={{ marginLeft: "20px" }}>
              <Typography
                variant="h4"
                sx={{ display: "flex", alignItems: "baseline" }}
              >
                2
                <Typography variant="body1" sx={{ opacity: 0.5 }}>
                  /km
                </Typography>
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.5 }}>
                Operating mileage
              </Typography>
            </Box>
          </RowBox>
          <RowBox sx={{ alignItems: "center" }}>
            <RunTimeIcon />
            <Box sx={{ marginLeft: "20px" }}>
              <Typography
                variant="h4"
                sx={{ display: "flex", alignItems: "baseline" }}
              >
                193
                <Typography variant="body1" sx={{ opacity: 0.5 }}>
                  /h
                </Typography>
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.5 }}>
                Running time
              </Typography>
            </Box>
          </RowBox>
        </Stack>
      </GlobalPanel>
    </Stack>
  );
});
