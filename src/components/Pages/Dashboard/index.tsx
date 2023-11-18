import { Card, styled, Paper, Grid, TableCell } from "@mui/material";
import React from "react";

import GlobalPanel from "../../GlobalPanel";

import VehicleStatus from "./components/VehicleStatus";
import TaskStatus from "./components/TaskStatus";
import ThreeColumn from "./components/ThreeColumn";

const Dashboard = () => {
  return (
    <Grid
      container
      columnSpacing={2.5}
      sx={{ height: "100%", flexWrap: "nowrap" }}
    >
      <Grid item xs={4}>
        <GlobalPanel delay={100} sx={{ height: "100%" }}>
          <VehicleStatus />
        </GlobalPanel>
      </Grid>
      <Grid item xs={4}>
        <GlobalPanel delay={250} sx={{ height: "100%" }}>
          <TaskStatus />
        </GlobalPanel>
      </Grid>
      <Grid item xs={4}>
        <GlobalPanel
          delay={400}
          sx={{ height: "100%", padding: "0", background: "transparent" }}
        >
          <ThreeColumn />
        </GlobalPanel>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
