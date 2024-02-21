import { Typography } from "@mui/material";
import TemplateCard from "../../../HomePage/components/TemplateCard";

const ProjectsCard = () => {
  return (
    <TemplateCard sx={{ width: "80%", maxWidth: "900px" }} height="auto">
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Projects
      </Typography>

      {/* {projectsList.map((item) => (
        <DetailItem content={item} key={item.id} />
      ))} */}

      <Typography variant="h5" textAlign="center">
        WIP 🙏
      </Typography>
    </TemplateCard>
  );
};

export default ProjectsCard;
