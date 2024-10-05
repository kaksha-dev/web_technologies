import ProductList from "./components/home/index.jsx";
import { SignIn } from "./components/signin/index.jsx";
import { SignUp } from "./components/signup";

export const routes = [
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
    }
  ]