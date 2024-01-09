"use client";
import { Grid, Stack, Button, Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/customers");
  };

  return (
    <Stack
      sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} container justifyContent="center">
          <Paper elevation={3} sx={{ padding: 5, textAlign: "center" }}>
            <Typography variant="h5" maxWidth={"sm"} mb={3}>
              Random user table built with React, NextJS and Material UI. Data
              persistence with LocalStorage. Quick client-side sorting and
              filtering.
            </Typography>
            <Button onClick={handleClick} size="large" variant="contained">
              Start Here
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
}
