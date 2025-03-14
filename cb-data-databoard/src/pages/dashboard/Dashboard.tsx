/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Box, Paper, Grid2 } from "@mui/material";
import scss from "./Dashboard.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon";
//import  from "@/components/Dashboard/DataRibbon";
//import  from "@/components/Dashboard/DataRibbon";

const Dashboard = () => {
  return (
    <Box>
      {/* Data ribbon - showing numerical stats */}
      <DataRibbon />
      {/* TransactionsPerDay - graphs - numerical cards */}
      {/* Transaction Doughnut Charts Bottom Row - doughnut charts -  */}
    </Box>
  );
};

export default Dashboard;
