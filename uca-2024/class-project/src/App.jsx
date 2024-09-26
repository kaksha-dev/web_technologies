import { aHeader as AHeader } from "./aHeader";
import ProductList from "./productList";

export function App() {
  return (
    <>
      <header>
        <AHeader></AHeader>
      </header>
      <main><ProductList l1 = "l1"></ProductList></main>
      <footer></footer>
    </>
  );
}
