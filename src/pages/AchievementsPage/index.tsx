import { Stack } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import AchievementsGroupCard from "./AchievementsCard";

const AchievementsPage = () => {
  const isMobile = useIsMobile();

  return (
    <Stack
      spacing="32px"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        paddingX: isMobile ? "18px" : "18%",
        paddingY: "32px",
      }}
    >
      <AchievementsGroupCard />
    </Stack>
  );
};

export default AchievementsPage;
