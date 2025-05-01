import type { Route } from "./+types/posts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Posts" },
    { name: "description test", content: "Welcome to React Router test!" },
  ];
}

// export async function loader({ params }: Route.LoaderArgs) {
//     //                           ^? { teamId: string }
//   }

export default function Posts({params}: Route.LoaderArgs) {
  return <div>posts main page {params.postId}</div>
}
