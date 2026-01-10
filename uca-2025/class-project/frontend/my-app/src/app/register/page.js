"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./register.module.css";
import Button from "../components/button";

// export const revalidate = 60;

// Scenario 1- Do not provide revalidate // static page  Recommended approach
// Scenario 2- add revalidate with value as 0 // revalidate=0 // dynamic server side page
// Scenario 3 - add revalidate with value as 60 // cached page revalidated after 60 seconds

export default function Login() {
  //   useEffect(() => {
  //     localStorage.setItem("token", "mytoken12345");
  //   }, []);

  const submitHandler = () => {
    console.log("Submit button clicked");
    // const name = document.getElementById("name").value;
    // const price = document.getElementById("price").value;
    // const image = document.getElementById("image").value;
    // const productData = { name: name, price: price, image: image };
    const productData = {
      name: nameRef.current.value,
      category: categoryRef.current.value,
      stock: stockRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((response) => {
        console.log("Response from server after adding product: ", response);
        if (response.ok) {
          window.alert("Product added successfully!");
        } else {
          window.alert("Failed to add product.");
        }
      })
      .catch((error) => {
        console.error("Error while adding product: ", error);
        window.alert("Failed to add product.");
      });

    console.log("Product Data: ", productData);
    console.log("Name Ref using useRef: ", nameRef.current);
    console.log("Name Ref using DOM: ", document.getElementById("name"));
  };

  return (
    <div style={{ margin: "50px" }}>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="FirstName LastName"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
            required
          />
        </div>
      </form>
      <div className="text-center">
        <Button variant="light">Register</Button>
      </div>
    </div>
  );
}
