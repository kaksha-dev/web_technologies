"use client";

import Link from "next/link";
import { useEffect } from "react";
import styles from "./login.module.css";
import Button from "../components/button";

// export const revalidate = 60;

// Scenario 1- Do not provide revalidate // static page  Recommended approach
// Scenario 2- add revalidate with value as 0 // revalidate=0 // dynamic server side page
// Scenario 3 - add revalidate with value as 60 // cached page revalidated after 60 seconds

export default function Login() {
  //   useEffect(() => {
  //     localStorage.setItem("token", "mytoken12345");
  //   }, []);

  const loginHandler = (e) => {
    // Do login here
  };
  return (
    <div style={{ margin: "50px" }}>
      <form className="max-w-sm mx-auto">
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
        <Button variant="light">Login</Button>
      </div>
      <Link href="/">Go to home</Link>
    </div>
  );
}
