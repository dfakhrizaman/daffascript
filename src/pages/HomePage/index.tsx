import { Box, Grid } from "@mui/material";
import MainInfoCard from "./components/MainInfoCard";
import SpotifyCard from "./components/SpotifyCard";
import SeeMoreCard from "./components/SeeMoreCard";
import ThumbnailCard from "./components/ThumbnailCard";
import experienceThumbnails from "./components/ThumbnailCard/experienceThumbnails";
import useIsMobile from "../../hooks/useIsMobile";

const HomePage = () => {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1,
        paddingX: isMobile ? "32px" : "18%",
        paddingY: "32px",
      }}
    >
      <Grid container spacing="20px" maxWidth="900px">
        <Grid item xs={12} sm={6.5}>
          <MainInfoCard />
        </Grid>
        <Grid item xs={12} sm={5.5}>
          <SpotifyCard />
        </Grid>
        <Grid item xs={12} sm={3}>
          <SeeMoreCard />
        </Grid>
        <Grid item xs={12} sm={9}>
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
  );
};

export default HomePage;
