"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Login() {
//   useEffect(() => {
//     localStorage.setItem("token", "mytoken12345");
//   }, []);

  const loginHandler = (e) => {
    // Do login here
  };
  return (
    <div style={{ margin: "50px" }}>
      <h2>Hello from login page</h2>
      <form>
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit" onClick={loginHandler}>
          Login
        </button>
        {/* <button type="submit">Login</button> */}
      </form>
      <Link href="/">Go to home</Link>
    </div>
  );
}
