import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
