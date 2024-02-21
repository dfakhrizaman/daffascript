import { Typography } from "@mui/material";
import TemplateCard from "../../../HomePage/components/TemplateCard";
import { experienceList } from "./experienceList";
import DetailItem from "../DetailItem";

const ExperienceGroupCard = () => {
  return (
    <TemplateCard sx={{ width: "80%", maxWidth: "900px" }} height="auto">
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Experiences
      </Typography>

      {experienceList.map((item) => (
        <DetailItem content={item} key={item.id} />
      ))}
    </TemplateCard>
  );
};

export default ExperienceGroupCard;
