import Navbar from "@/common/components/Navbar";
import "@nodemodules/bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: "Univ Library",
  description: "App | Welcome to Libray ",
};
