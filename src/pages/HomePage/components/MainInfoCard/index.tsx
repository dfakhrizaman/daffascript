import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import TemplateCard from "../TemplateCard";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import { openUrlNewTab } from "../../../../helpers";

const MainInfoCard = () => {
  const isMediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 940px)"
  );

  const handleEmailButtonClick = () => {
    const emailAddress = "daffafakhrizaman@gmail.com";
    const subject = "Inquiry Regarding [Your topic]";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <TemplateCard height="200px">
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Stack
          direction={isMediumScreen ? "column" : "row"}
          alignItems="baseline"
          spacing="8px"
          marginBottom="16px"
        >
          <Typography variant="h2">Daffa</Typography>
          <Typography sx={{ fontSize: "18px", color: "#A1A1A1" }}>
            Fakhrizaman
          </Typography>
        </Stack>

        <Box>
          <Typography variant="h4" marginBottom="10px">
            Software Engineer
          </Typography>
          <Typography variant="subtitle1">
            {!isMediumScreen && "Jakarta, "}Indonesia
          </Typography>
        </Box>

        <Stack direction="row" spacing="26px" marginTop="24px">
          <IconButton
            onClick={() =>
              openUrlNewTab("https://www.linkedin.com/in/daffa-fakhrizaman/")
            }
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            onClick={() => openUrlNewTab("https://github.com/dfakhrizaman")}
          >
            <GitHub />
          </IconButton>
          <IconButton onClick={handleEmailButtonClick}>
            <Email />
          </IconButton>
        </Stack>
      </Box>
    </TemplateCard>
  );
};

export default MainInfoCard;
