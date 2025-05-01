import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import BaseLayout from "../layouts/BaseLayout";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: BaseLayout,
      children: [
        {
            index: true,
            element: <Home />,
        }
      ]
    },
  ]);