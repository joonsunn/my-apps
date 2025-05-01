import type { Route } from "./+types/test";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "test" },
    { name: "description test", content: "Welcome to React Router test!" },
  ];
}

export default function Test() {
  return <div>This is the test route</div>;
}
