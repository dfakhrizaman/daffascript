import { Typography } from "@mui/material";
import TemplateCard from "../../../HomePage/components/TemplateCard";
import universitasIndonesiaLogo from "../../../../assets/universitas-indonesia-logo.png";
import duisburgEssenLogo from "../../../../assets/duisburg-essen-logo.jpeg";
import DetailItem from "../DetailItem";
import { CardItem } from "../../../../types/CardItem.type";

const educationList: CardItem[] = [
  {
    id: "universitas-indonesia",
    companyName: "University of Indonesia",
    role: "Electrical Engineering",
    type: "Bachelor's Degree",
    companyImage: universitasIndonesiaLogo,
    dateRange: "2019 - 2024",
    description: "",
    markdownContent: "universitas-indonesia.md"
  },
  {
    id: "duisburg-essen",
    companyName: "University of Duisburg-Essen",
    role: "Electrical & Electronics Engineering",
    type: "Student Exchange",
    companyImage: duisburgEssenLogo,
    dateRange: "Oct 2022 - Mar 2023",
    description: "",
    markdownContent: "university-duisburg-essen.md"
  },
];

const EducationCard = () => {
  return (
    <TemplateCard sx={{ width: "80%", maxWidth: "900px" }} height="auto">
      <Typography variant="h4" sx={{ marginBottom: "24px" }}>
        Education
      </Typography>

      {educationList.map((item) => (
        <DetailItem key={item.id} content={item} />
      ))}
    </TemplateCard>
  );
};

export default EducationCard;
