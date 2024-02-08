import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import TemplateCard from "../TemplateCard";
import { OpenInNew } from "@mui/icons-material";

const SeeMoreCard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <TemplateCard height={isMobile ? "100px" : null}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          See more of my works and feats!
        </Typography>
        <IconButton sx={{ alignSelf: "start", padding: 0 }}>
          <OpenInNew />
        </IconButton>
      </Box>
    </TemplateCard>
  );
};

export default SeeMoreCard;
