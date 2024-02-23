import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import TemplateCard from "../TemplateCard";
import TextButton from "../../../../components/TextButton";
import DetailItem from "../../../../types/DetailItem.type";
import { useDispatch } from "react-redux";
import { setDetailModal } from "../../../../redux/detailModal.slice";

interface Props {
  content: DetailItem;
}

const ThumbnailCard = ({ content }: Props) => {
  const isBigScreen = useMediaQuery("(min-width:1400px)");
  const isMidScreen = useMediaQuery("(min-width: 610px) and (max-width: 1000px)");

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(
      setDetailModal({
        open: true,
        content: content,
      })
    );
  };

  function renderTag(tag: string, index: number) {
    return <Box key={tag} sx={{ display: "flex" }}>
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
        onClick={() => console.log("test")}
        sx={{
          color: "#A1A1A1",
          fontSize: "14px",
          fontWeight: "600",
          fontFamily: "IBM Plex Mono",
        }}
      >
        {tag}
      </Typography>
    </Box>;
  }

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
              {
                isMidScreen
                  ? content.tags.slice(0, 2).map((tag, index) => (
                    renderTag(tag, index)
                  ))
                  : content.tags.map((tag, index) => (
                    renderTag(tag, index)
                  ))
              }
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

          <TextButton onClick={handleOpenModal}>See More</TextButton>
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
              alt={content.title}
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
