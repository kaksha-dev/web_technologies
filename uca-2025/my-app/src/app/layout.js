// import Home from "./page";

export const metadata = {
  title: "E-Commerce App",
  description: "An e-commerce application built with Next.js",
}

function Layout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

function Home() {
    return <h1>Welcome to Next.js!</h1>;
}

export default Layout;