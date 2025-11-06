// import Home from "./page";
import "@/app/global.css";
import Header from "./components/header";
import { Suspense } from "react";
import { headers } from "next/headers";

export const metadata = {
  title: "E-Commerce App",
  description: "An e-commerce application built with Next.js",
};

function Layout({ children }) {
  // const headersList = headers();
  // const pathname = headersList.get("x-pathname") || "/";
  // console.log("---------Layout Pathname-----------", pathname);
  return (
    <html lang="en">
      <body>
        <Header />
        <Suspense fallback={<h1>Loading the data....</h1>}>{children}</Suspense>
      </body>
    </html>
  );
}

function Home() {
  return <h1>Welcome to Next.js!</h1>;
}

export default Layout;
