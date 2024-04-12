import { Box, Grid } from "@mui/material";
import MainInfoCard from "./components/MainInfoCard";
import SpotifyCard from "./components/SpotifyCard";
import SeeMoreCard from "./components/SeeMoreCard";
import ThumbnailCard from "./components/ThumbnailCard";
import experienceThumbnails from "./components/ThumbnailCard/experienceThumbnails";
import useIsMobile from "../../hooks/useIsMobile";
import { motion } from 'framer-motion';

const contentList = [
  {
    xs: 12,
    sm: 6.5,
    component: <MainInfoCard />,
    duration: 0.4
  },
  {
    xs: 12,
    sm: 5.5,
    component: <SpotifyCard />,
    duration: 0.6
  },
  {
    xs: 12,
    sm: 3,
    component: <SeeMoreCard />,
    axis: 'x',
    duration: 0.6
  },
  {
    xs: 12,
    sm: 9,
    component: <ThumbnailCard content={experienceThumbnails[0]} />,
    axis: 'x',
    duration: 0.7
  },
  {
    xs: 12,
    sm: 6,
    component: <ThumbnailCard content={experienceThumbnails[1]} />,
    axis: 'y',
    duration: 0.8
  },
  {
    xs: 12,
    sm: 6,
    component: <ThumbnailCard content={experienceThumbnails[2]} />,
    axis: 'y',
    duration: 0.8
  }
];

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
        {contentList.map((item, index) => (
          <Grid item xs={item.xs} sm={item.sm} key={index}>
            {
              !isMobile
                ? (<motion.div
                  initial={item.axis === 'x' ? { x: '100vw' } : { y: '100vh' }}
                  animate={item.axis === 'x' ? { x: 0 } : { y: 0 }}
                  transition={{ duration: item.duration }}
                >
                  {item.component}
                </motion.div>)
                : (item.component)
            }
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
