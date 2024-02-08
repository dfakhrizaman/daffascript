import { Box, Grid, useMediaQuery } from "@mui/material";
import MainInfoCard from "./components/MainInfoCard";
import SpotifyCard from "./components/SpotifyCard";
import SeeMoreCard from "./components/SeeMoreCard";
import ThumbnailCard from "./components/ThumbnailCard";
import experienceThumbnails from "./components/ThumbnailCard/experienceThumbnails";

const HomePage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        flexGrow={1}
        sx={{
          paddingX: isMobile ? "32px" : "18%",
          paddingY: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid container spacing="20px" maxWidth="900px">
          <Grid item xs={12} sm={6.5}>
            <MainInfoCard />
          </Grid>
          <Grid item xs={12} sm={5.5}>
            <SpotifyCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SeeMoreCard />
          </Grid>
          <Grid item xs={12} sm={8}>
            <ThumbnailCard content={experienceThumbnails[0]} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ThumbnailCard content={experienceThumbnails[1]} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ThumbnailCard content={experienceThumbnails[2]} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HomePage;
