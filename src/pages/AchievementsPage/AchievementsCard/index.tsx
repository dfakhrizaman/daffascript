import { Typography } from "@mui/material";
import TemplateCard from "../../HomePage/components/TemplateCard";
import { achievementsList } from "./achievementsList";
import DetailItem from "../../../components/DetailItem";

const AchievementsGroupCard = () => {
  return (
    <TemplateCard sx={{ width: "80%", maxWidth: "900px" }} height="auto">
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Achievements
      </Typography>

      {achievementsList.map((item) => (
        <DetailItem content={item} key={item.id} />
      ))}
    </TemplateCard>
  );
};

export default AchievementsGroupCard;
