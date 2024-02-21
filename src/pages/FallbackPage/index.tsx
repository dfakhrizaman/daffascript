import { Box, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

const FallbackPage = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        paddingX: isMobile ? "32px" : "18%",
        paddingY: "32px",
      }}
    >
      <Typography variant="h2">404</Typography>
      <Typography variant="h4">Page not found :(</Typography>
    </Box>
  );
};

export default FallbackPage;
