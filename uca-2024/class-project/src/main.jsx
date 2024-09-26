import { createRoot } from "react-dom/client";
import { App as CustomApp } from "./App";

const reactProjectRoot = createRoot(document.getElementById("root"));
reactProjectRoot.render(<CustomApp />)
