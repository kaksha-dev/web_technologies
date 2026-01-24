"use client";

import Link from "next/link";
import Button from "./button";
import { useEffect, useRef, useState } from "react";

function Header() {
  // Try 1 by using open global variable
  // This caused issues n server side rendering as localStorage is not available on server side  // let userName = localStorage.getItem("username");

  // Try 2 with useEffect only -
  // This fixed server side issue but userName is re-initialized on subsequent renders
  // let userName = "";
  // console.log("The username outside useEffect is ", userName.current);
  // useEffect(() => {
  //   userName = localStorage.getItem("username");
  //   console.log("The username inside useEffect is ", userName);
  // }, []);

  // Try 3 with useEffect and useRef -
  // This fixed both server side issue and re-initialization issue, but updated are not reflected in UI / pushed in DOM
  // const userName = useRef("");
  // console.log("The username outside useEffect is ", userName.current);

  // useEffect(() => {
  //   userName.current = localStorage.getItem("username");
  //   console.log("The username inside useEffect is ", userName);
  // }, []);

  // Try 4 with useEffect and useState -
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  console.log("The username outside useEffect is ", userName);

  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    setUserRole(localStorage.getItem("userrole"));
    console.log("The username outside useEffect is ", userName);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
        localStorage.removeItem("userrole");

    window.location.href = "/";
  };

  return (
    <div
      style={{
        backgroundColor: "grey",
        padding: "1px 20px",
        margin: "0px -20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link href="/">
        <h1>E-Com</h1>
      </Link>
      <div style={{ margin: "5px" }}>
        {userName ? (
          <>
            <Link
              href="/profile"
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "white",
                margin: "0 5px",
              }}
            >
              {userName}
            </Link>
            <Button variant="primary" onClick={logoutHandler}>
              <h2>Logout</h2>
            </Button>
            {userRole === "admin" && (
              <Button variant="primary">
                <Link href="/addproduct">
                  <h2>Add Product</h2>
                </Link>
              </Button>
            )}
          </>
        ) : (
          <Button variant="primary">
            <Link href="/login">
              <h2>Login</h2>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}

export default Header;
