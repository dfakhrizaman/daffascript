import bfiLogo from "../../../../assets/bfi-logo.jpeg";
import adventureCareUI from "../../../../assets/adventure-care-ui.jpg";
import exerciseAssistantUI from "../../../../assets/exercise-assistant-ui.jpg";
export interface ExperienceThumbnail {
  id: string;
  tags: string[];
  title: string;
  subtitle: string;
  markdownContent: string;
  image: string;
}

const experienceThumbnails: ExperienceThumbnail[] = [
  {
    id: "bfi-finance",
    tags: ["WEB", "REACT.JS", "MOBILE", "FINANCE"],
    title: "BFI Finance",
    subtitle:
      "Part of Indonesia's biggest and most established multi-finance company's Digital Incubation team.",
    markdownContent: "test",
    image: bfiLogo,
  },
  {
    id: "adventure-care-id",
    tags: ["MOBILE", "FLUTTER", "HEALTH"],
    title: "AdventureCare.ID",
    subtitle:
      "Fostering healthy habits in children with Type 1 Diabetes through mobile game.",
    markdownContent: "test",
    image: adventureCareUI,
  },
  {
    id: "exercise-assistant",
    tags: ["WEB", "REACT", "TENSORFLOW", "HEALTH"],
    title: "Virtual Fitness Coach",
    subtitle:
      "Utilizing TensorFlow to power a website dedicated for daily exercise routines.",
    markdownContent: "test",
    image: exerciseAssistantUI,
  },
];

export default experienceThumbnails;
