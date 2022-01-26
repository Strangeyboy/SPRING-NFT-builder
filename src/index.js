import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./card";
import { Export } from "./export";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

ReactDOM.render(
    <React.StrictMode>
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Export />
          </Grid>
        </Box>
      </Container>
      <Container>
        hello
      </Container>
    </React.StrictMode>,
    document.getElementById("root")
  );
