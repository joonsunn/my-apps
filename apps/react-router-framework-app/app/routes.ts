import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("posts", [index("routes/posts.tsx"), route(":postId", "routes/Post.tsx")]),
  route("/test", "routes/test.tsx"),
] satisfies RouteConfig;
