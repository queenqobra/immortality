import "c:/Users/Jane/Desktop/immortality/project/tailwind.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Site } from "./screens/Site";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Site />
  </StrictMode>,
);
