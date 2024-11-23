import { ManageProduct } from "./components/manageproduct/index.jsx";
import ProductList from "./components/home";
import { SignIn } from "./components/signin";
import { SignUp } from "./components/signup";
import { Layout } from "./layout.jsx";
import { isUserLoggedIn } from "./utils/helpers.js";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <ProductList></ProductList>,
      },
      {
        path: "/signin",
        element: !isUserLoggedIn() ? (
          <SignIn></SignIn>
        ) : (
          <Navigate to="/" replace={true} />
        ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addproduct",
        element: <ManageProduct type="add"></ManageProduct>,
      },
      {
        path: "/editproduct",
        element: <ManageProduct type="edit"></ManageProduct>,
      },
    ],
  },
];
