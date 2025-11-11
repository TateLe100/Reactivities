import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../../../features/home/HomePage";
import ActivityDashboard from "../../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../../features/activities/form/ActivityForm";
import ActivitiesDetailPage from "../../../features/activities/details/ActivitiesDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "activities", element: <ActivityDashboard /> },
      { path: "activities/:id", element: <ActivitiesDetailPage /> },
      { path: "createActivity", element: <ActivityForm key="create" /> },
      { path: "manage/:id", element: <ActivityForm /> },
    ],
  },
]);
