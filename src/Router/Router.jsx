
import { createBrowserRouter } from "react-router";
import MianLayout from "../Laylout/MianLayout";
import Home from "../Pages/Home";
import ProjectDetails from "../Pages/ProjectDetails";


export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MianLayout></MianLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default Router;
