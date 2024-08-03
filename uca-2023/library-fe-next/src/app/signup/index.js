"use client";

import UInput from "@/common/components/uInput";
import UButton from "@/common/components/ubutton";
import style from "./style.module.css";
import UAlert from "@/common/components/alert";
import { useState } from "react";

function SignUp() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      firstName: event.currentTarget.firstName.value,
      lastName: event.currentTarget.lastName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    }).then(
      (response) => {
        if (response.ok) {
          setShowAlert(true);
        }
      },
      (error) => {}
    );
  };

  const toggleAlert = (value) => {
    setShowAlert(value);
  };

  return (
    <div className={style["signup-container"]}>
      <UAlert
        message="User registered successfully"
        show={showAlert}
        toggleAlert={toggleAlert}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <UInput
            id="firstName"
            placeholder="Enter First Name"
            label="First Name"
            type="text"
          />
          <UInput
            id="lastName"
            placeholder="Enter Last Name"
            label="Last Name"
            type="text"
          />
        </div>
        <UInput
          id="email"
          placeholder="Enter email"
          label="Email"
          type="email"
        />
        <UInput
          id="password"
          placeholder="Enter password"
          label="Password"
          type="password"
        />
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <UButton type="submit" variant="primary">
            Submit
          </UButton>
          <UButton type="reset" variant="secondary">
            Reset
          </UButton>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
