import { Box, Typography } from "@mui/material";
import TemplateCard from "../TemplateCard";
import useIsMobile from "../../../../hooks/useIsMobile";
import TextButton from "../../../../components/TextButton";
import { useNavigate } from "react-router-dom";

const SeeMoreCard = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/experience-and-education");
  };

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
          See more of my works!
        </Typography>
        <TextButton onClick={handleClick}>See More</TextButton>
      </Box>
    </TemplateCard>
  );
};

export default SeeMoreCard;
