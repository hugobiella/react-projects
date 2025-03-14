import React from "react";
import { Grid2 } from "@mui/material";
import DataCard from "@/components/Dashboard/DataCard";
import scss from "./DataRibbon.module.scss";

const DataRibbon = () => {
  return (
    <Grid2 container gap={2} className={scss.dataRibbon}>
      <Grid2>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={"description"}
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Total Value"}
          value={"$25,732.53"}
          description={"description"}
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Avg. Order Value"}
          value={"$159.30"}
          description={"description"}
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Conversion Rate"}
          value={"0.61%"}
          description={"description"}
        />
      </Grid2>
    </Grid2>
  );
};

export default DataRibbon;
