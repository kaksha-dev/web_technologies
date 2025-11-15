import Link from "next/link";
import ProductsListAlias from "@/app/components/productsList";
import Button from "./components/button";
import { sleep } from "./common/utils/helpers";

// Cache revalidation / Disable caching for this page with 0 value
export const revalidate = 60;

export default async function Home() {
  // -------Simulate API call behavior with a delay-------
  await sleep(2000);
  console.log("Slept for 10 seconds");
  // -----------------------------------------------------
  const productsFromJServer = await fetch("http://localhost:5000/products", {
    method: "GET",
  });
  const productsDataFromJServer = await productsFromJServer.json();

  console.log(
    "----------Fetched products from server: ",
    productsDataFromJServer
  );

  // const products = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     price: "50$",
  //     tag: "Top seller",
  //     image: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: "150$",
  //     tag: "Recommended",
  //     image: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     price: "20$",
  //     tag: "On Sale",
  //     image: "https://placehold.co/300x200",
  //   },
  //   {
  //     id: 4,
  //     name: "Product 4",
  //     price: "800$",
  //     tag: "Best price",
  //     image: "https://placehold.co/300x200",
  //   },
  // ];

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to the books ecommerce application</h1>
      </div>

      {/* <div></div> */}
      <ProductsListAlias products={productsDataFromJServer} />
      <div>
        <section className="border-2 border-solid py-8">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4">
              Discover the Best Deals Online
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Shop thousands of products from top brands at unbeatable prices.
            </p>
          </div>
          <Button variant="light">Take me to Login page</Button>
        </section>
      </div>
    </>
  );
}

// /p/poduct1

// /p/poduct2

// /p/product1000
