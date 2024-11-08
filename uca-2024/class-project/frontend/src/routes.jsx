import { ManageProduct } from "./components/manageproduct/index.jsx";
import ProductList from "./components/home";
import { SignIn } from "./components/signin";
import { SignUp } from "./components/signup";
import { Layout } from "./layout.jsx";

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
        element: <SignIn></SignIn>,
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
