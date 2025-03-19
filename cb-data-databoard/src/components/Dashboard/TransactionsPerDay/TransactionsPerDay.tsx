/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import scss from "./TransactionsPerDay.module.scss";
import { Card, Grid2, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/system";
import DataChart from "@/components/DataChart";
import { lineChartData } from "@/components/Dashboard/mockData";

const TransactionsPerDay = () => {
  const theme = useTheme();

  return (
    <Grid2 container gap={2} className={scss.wrapper}>
      <Paper className={scss.transactions}>
        <div className={scss.chart}>
          <Typography>Dashboard</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
      </Paper>
    </Grid2>
  );
};

export default TransactionsPerDay;
