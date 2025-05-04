import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
import BaseLayout from "../layouts/BaseLayout";
import Post from "../pages/posts/Post";
import Posts from "../pages/posts/Posts";
import Product from "../pages/products/Product";
import Products from "../pages/products/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: BaseLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",

        children: [
          {
            index: true,
            element: <Posts />,
          },
          {
            path: ":postId",
            element: <Post />,
          },
        ],
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":productId",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);
