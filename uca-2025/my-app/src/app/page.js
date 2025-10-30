import Link from "next/link";
import ProductsList from "./components/productsList";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "50$",
      tag: "Top seller",
      image: "https://placehold.co/300x200",
    },
    {
      id: 2,
      name: "Product 2",
      price: "150$",
      tag: "Recommended",
      image: "https://placehold.co/300x200",
    },
    {
      id: 1,
      name: "Product 3",
      price: "20$",
      tag: "On Sale",
      image: "https://placehold.co/300x200",
    },
    {
      id: 1,
      name: "Product 4",
      price: "800$",
      tag: "Best price",
      image: "https://placehold.co/300x200",
    }
  ];
  return (
    <>
      <h1>Home Page!</h1>
      <Link href="/login">Go to login</Link>
      <div>List of Products</div>
      <ProductsList products={products} />
    </>
  );
}


// /p/poduct1

// /p/poduct2






// /p/product1000