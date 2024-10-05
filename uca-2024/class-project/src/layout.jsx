/* eslint-disable react/prop-types */
import { Header } from "./Header";

export function Layout(props) {

  return (
    <div className="container">
      <header>
        <Header></Header>
      </header>
      {props.children}
      <footer></footer>
    </div>
  );
}
