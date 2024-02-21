import { Stack } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import EducationCard from "./components/EducationCard";
import ExperienceGroupCard from "./components/ExperienceGroupCard";
import ProjectsCard from "./components/ProjectsCard";

const WorkAndEducationPage = () => {
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
      <EducationCard />
      <ExperienceGroupCard />
      <ProjectsCard />
    </Stack>
  );
};

export default WorkAndEducationPage;
