import {
  EmojiEventsOutlined,
  PersonOutline,
  WorkOutlineOutlined,
} from "@mui/icons-material";

const menuItems = [
  {
    id: "profile",
    label: "Profile",
    route: "/",
    icon: <PersonOutline />,
  },
  {
    id: "experience-and-education",
    label: "Experience and Education",
    route: "/experience-and-education",
    icon: <WorkOutlineOutlined />,
  },
  {
    id: "achievements",
    label: "Achievements",
    route: "/achievements",
    icon: <EmojiEventsOutlined />,
  },
];

export default menuItems;
