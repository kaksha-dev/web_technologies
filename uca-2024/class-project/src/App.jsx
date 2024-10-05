import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Layout } from "./layout";

export function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <Layout prop1="value1">
        <main>
          <RouterProvider router={router}></RouterProvider>
        </main>
      </Layout>
    </>
  );
}
