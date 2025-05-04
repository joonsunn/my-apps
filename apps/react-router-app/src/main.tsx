import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Router.tsx";
import { TanstackQueryProvider } from "@packages/tanstack-query";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackQueryProvider>
      <RouterProvider router={router} />
    </TanstackQueryProvider>
  </StrictMode>
);
