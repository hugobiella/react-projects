import React from 'react';
import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import scss from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <Box>
            <Grid container spacing={2} className={scss.topCardsContainer}>
                <Grid item xs={4}>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid>

                <Grid item xs={4}>
                    <Paper className={scss.dataCard}>xs=4</Paper>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} marginY={2}>
                    <Paper className={scss.dataCard}>xs=12</Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;
