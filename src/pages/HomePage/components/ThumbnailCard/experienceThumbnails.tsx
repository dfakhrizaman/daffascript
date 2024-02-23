import bfiLogo from "../../../../assets/bfi-logo.jpeg";
import adventureCareUI from "../../../../assets/adventure-care-ui.jpg";
import exerciseAssistantUI from "../../../../assets/exercise-assistant-ui.jpg";
import DetailItem from "../../../../types/DetailItem.type";

const experienceThumbnails: DetailItem[] = [
  {
    id: "bfi-finance",
    tags: ["WEB", "REACT.JS", "MOBILE", "FINANCE"],
    title: "BFI Finance",
    subtitle:
      "Frontend Engineer at Indonesia's biggest and most established multi-finance company's Digital Incubation team.",
    markdownContent: 'bfi-finance.md',
    image: bfiLogo,
  },
  {
    id: "adventure-care-id",
    tags: ["MOBILE", "FLUTTER", "HEALTH"],
    title: "AdventureCare.ID",
    subtitle:
      "Fostering healthy habits in children with Type 1 Diabetes through mobile game.",
    markdownContent: 'adventure-care.md',
    image: adventureCareUI,
  },
  {
    id: "exercise-assistant",
    tags: ["WEB", "AI", "TENSORFLOW", "HEALTH"],
    title: "Virtual Fitness Coach",
    subtitle:
      "Utilizing TensorFlow to power a website dedicated for daily exercise routines.",
    markdownContent: 'virtual-fitness-coach.md',
    image: exerciseAssistantUI,
  },
];

export default experienceThumbnails;
