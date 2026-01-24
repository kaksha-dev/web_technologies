"use client";

import styles from "./register.module.css";
import Button from "../components/button";
import { useRef } from "react";

export default function Login() {

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const registerSubmitHandler = () => {
    console.log("Submit button clicked");

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log("Response from server after adding user: ", response);
        if (response.ok) {
          window.alert("User added successfully!");
        } else {
          window.alert("Failed to add product.");
        }
      })
      .catch((error) => {
        console.error("Error while adding user: ", error);
        window.alert("Failed to add user.");
      });
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
            ref={nameRef}
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
            ref={emailRef}
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
            ref={passwordRef}
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
            required
          />
        </div>
      </form>
      <div className="text-center">
        <Button variant="light" onClick={registerSubmitHandler}>
          Register
        </Button>
      </div>
    </div>
  );
}
