import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TemplateCard from "../TemplateCard";
import { OpenInNew } from "@mui/icons-material";
import { ExperienceThumbnail } from "./experienceThumbnails";

interface Props {
  content: ExperienceThumbnail;
}

const ThumbnailCard = ({ content }: Props) => {
  const isBigScreen = useMediaQuery("(min-width:1400px)");

  return (
    <TemplateCard>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Stack spacing="2px">
            <Box sx={{ display: "flex" }}>
              {content.tags.map((tag, index) => (
                <Box key={tag} sx={{ display: "flex" }}>
                  {index === 0 ? null : (
                    <Typography
                      sx={{
                        color: "#A1A1A1",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "IBM Plex Mono",
                        marginX: "6px",
                      }}
                    >
                      {" · "}
                    </Typography>
                  )}
                  <Typography
                    sx={{
                      color: "#A1A1A1",
                      fontSize: "14px",
                      fontWeight: "600",
                      fontFamily: "IBM Plex Mono",
                    }}
                  >
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Typography variant="h3">{content.title}</Typography>

            <Typography
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                color: "#A1A1A1",
                lineHeight: "1.4",
              }}
            >
              {content.subtitle}
            </Typography>
          </Stack>

          <IconButton sx={{ alignSelf: "start", padding: 0 }}>
            <OpenInNew />
          </IconButton>
        </Box>

        {isBigScreen && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <img
              src={content.image}
              style={{
                maxWidth: "90px",
                maxHeight: "150px",
              }}
            />
          </Box>
        )}
      </Box>
    </TemplateCard>
  );
};

export default ThumbnailCard;
