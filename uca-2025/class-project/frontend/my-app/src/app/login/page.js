"use client";

import Link from "next/link";
import { useRef } from "react";
import styles from "./login.module.css";
import Button from "../components/button";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginHandler = (e) => {
    // Do login here
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("http://localhost:5000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then(async (response) => {
        console.log("Response from server after sign in: ", response);
        if (response.ok) {
          window.alert("User login success!");
          const responseData = await response.json();
          if (responseData) {
            console.log("Signin response data: ", responseData);
            localStorage.setItem("token", responseData.token);
            fetchUserDetails(user.email);
          }
        } else {
          window.alert("User login failed.");
        }
      })
      .catch((error) => {
        console.error("Error while signin user: ", error);
        window.alert("Failed to login user.");
      });
  };

  const fetchUserDetails = (email) => {
    fetch(`http://localhost:5000/users/${email}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();
          if (responseData) {
            console.log("user data: ", responseData);
            localStorage.setItem("username", responseData.name);
            window.location.href = "/";
            // window.location.reload();
          }
        } else {
          window.alert("Fetch User details failed.");
        }
      })
      .catch((error) => {
        window.alert("Fetch User details failed.");
        return error;
      });
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
        <Button variant="light" onClick={loginHandler}>
          Login
        </Button>
      </div>
      <Link href="/">Go to home</Link>
      <br />
      <Link href="/register">Register</Link>
    </div>
  );
}
