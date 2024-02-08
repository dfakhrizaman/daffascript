import { Box, Typography } from "@mui/material";
import HomePage from "../pages/HomePage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/works-and-education",
    element: (
      <Box>
        <Typography variant="h2">Hello world!</Typography>
      </Box>
    ),
  },
  {
    path: "/achievements",
    element: (
      <Box>
        <Typography variant="h2">Hpage</Typography>
      </Box>
    ),
  },
];

export default routes;
