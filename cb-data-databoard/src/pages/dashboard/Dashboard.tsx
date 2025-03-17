import React from "react";
import { Box } from "@mui/material";
import DataRibbon from "@/components/Dashboard/DataRibbon";
import TransactionsPerDay from "@/components/Dashboard/TransactionsPerDay";
import TransactionBottomRow from "@/components/Dashboard/TransactionBottomRow";
import { Grid2 } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Grid2>
        <DataRibbon />
      </Grid2>
      <Grid2 marginTop={4}>
        <TransactionsPerDay />
      </Grid2>
      <TransactionBottomRow />
    </Box>
  );
};
export default Dashboard;
