import { Box, Typography } from "@mui/material";
import useIsMobile from "../../../../hooks/useIsMobile";
import { CardItem } from "../../../../types/CardItem.type";
import TextButton from "../../../../components/TextButton";

interface Props {
  content: CardItem;
}

const DetailItem = ({ content }: Props) => {
  const isMobile = useIsMobile();

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
            {content.role} ({content.type})
          </Typography>
        </Box>
      </Box>
      <TextButton sx={{ marginTop: "10px" }}>See More</TextButton>
    </Box>
  );
};

export default DetailItem;
