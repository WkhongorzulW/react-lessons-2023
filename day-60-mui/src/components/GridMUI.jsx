import { createTheme, Grid } from "@mui/material";
import { Box, ThemeProvider } from "@mui/system";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 769,
      lg: 1140,
      xl: 1440,
    },
  },
});

const GridMUI = () => {
  return (
    <div>
      <h1>DAY-60 MUI Grid Box - Custom Theme</h1>
      <main>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                First column
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                  },
                }}
              >
                Second column
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </main>
    </div>
  );
};

export default GridMUI;
