/* eslint-disable react/prop-types */
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="container">
      <header>
        <Header></Header>
      </header>
      <main style={{marginTop: "10px", padding: "10px"}}>
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
