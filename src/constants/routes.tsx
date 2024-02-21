import HomePage from "../pages/HomePage";
import WorkAndEducationPage from "../pages/WorkAndEducationPage";
import AchievementsPage from "../pages/AchievementsPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/experience-and-education",
    element: <WorkAndEducationPage />,
  },
  {
    path: "/achievements",
    element: <AchievementsPage />,
  },
];

export default routes;
