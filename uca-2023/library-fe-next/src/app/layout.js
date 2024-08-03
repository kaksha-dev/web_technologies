import Navbar from "@/common/components/Navbar";
import "@nodemodules/bootstrap/dist/css/bootstrap.min.css";
import ReduxStoreProvider from "./reduxStoreProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxStoreProvider>
          <Navbar></Navbar>
          {children}
        </ReduxStoreProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Univ Library",
  description: "App | Welcome to Libray ",
};
