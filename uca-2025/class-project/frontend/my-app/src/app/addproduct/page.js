"use client";

import Link from "next/link";
import Button from "../components/button";
import { useEffect, useRef, useState } from "react";

export default function AddProductage() {
  const [userRole, setUserRole] = useState("");
  console.log("The userrole outside useEffect is ", userRole);

  useEffect(() => {
    let userRoleLocal = localStorage.getItem("userrole");
    setUserRole(userRoleLocal);
  }, []);

  useEffect(() => {
    if (userRole && userRole !== "admin") {
      window.location.href = "/";
    }
  }, [userRole]);

  const nameRef = useRef(null);
  const categoryRef = useRef(null);
  const stockRef = useRef(null);
  const priceRef = useRef(null);
  const imageRef = useRef(null);

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
    <>
      {userRole === "admin" && (
        <div style={{ margin: "50px" }}>
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Mobile...."
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Category
              </label>
              <input
                type="text"
                id="name"
                ref={categoryRef}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="Electronics...."
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Stock
              </label>
              <input
                type="number"
                id="name"
                ref={stockRef}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="20...."
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="price"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                ref={priceRef}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="300$...."
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="image"
                className="block mb-2.5 text-sm font-medium text-heading"
              >
                Image
              </label>
              <input
                type="url"
                id="image"
                ref={imageRef}
                className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                placeholder="https://placeholder/300x200...."
                required
              />
            </div>
          </form>
          <div className="text-center">
            <Button variant="light" onClick={submitHandler}>
              Submit
            </Button>
          </div>
        </div>
      )}
      {userRole && userRole !== "admin" && (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          You are not authorized to view this page.
        </h2>
      )}

      {!userRole && (
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Checking authorization...
        </h2>
      )}
    </>
  );
}
