import { createRoot } from "react-dom/client";
import { App } from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const reactProjectRoot = createRoot(document.getElementById("root"));
reactProjectRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
