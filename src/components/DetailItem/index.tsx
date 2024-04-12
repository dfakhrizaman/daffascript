import { Box, Typography } from "@mui/material";
import { setDetailModal } from "../../redux/detailModal.slice";
import { useDispatch } from "react-redux";
import useIsMobile from "../../hooks/useIsMobile";
import { CardItem } from "../../types/CardItem.type";
import TextButton from "../TextButton";

interface Props {
  content: CardItem;
}

const DetailItem = ({ content }: Props) => {
  const isMobile = useIsMobile();

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(
      setDetailModal({
        open: true,
        content: content,
      })
    );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", marginTop: "32px" }}>
        {!isMobile && (
          <img
            alt={content.companyName}
            src={content.companyImage}
            width={56}
            height="100%"
          />
        )}
        <Box sx={{ width: "100%", marginLeft: isMobile ? null : "22px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "8px",
              width: "100%",
            }}
          >
            <Typography variant="h3">{content.companyName}</Typography>
            <Typography
              variant="h5"
              noWrap
              minWidth="100px"
              marginLeft={isMobile ? "0px" : "10px"}
              textAlign="end"
            >
              {content.dateRange}
            </Typography>
          </Box>
          <Typography fontSize="18px" color="#A1A1A1">
            {content.role} {content.type ? `(${content.type})` : ''}
          </Typography>
        </Box>
      </Box>
      <TextButton sx={{ marginTop: "10px" }} onClick={handleOpenModal}>See More</TextButton>
    </Box>
  );
};

export default DetailItem;
