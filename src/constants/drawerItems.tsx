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
    id: "works-and-education",
    label: "Works and Education",
    route: "/works-and-education",
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
