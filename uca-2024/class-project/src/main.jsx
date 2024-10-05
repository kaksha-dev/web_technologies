import { createRoot } from "react-dom/client";
import { App } from "./App";

const reactProjectRoot = createRoot(document.getElementById("root"));
reactProjectRoot.render(<App />)
