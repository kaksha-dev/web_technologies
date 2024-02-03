import UInput from "@/common/components/uInput";
import UButton from "@/common/components/ubutton";
import style from "./style.module.css";
import UAlert from "@/common/components/alert";
import { useState } from "react";

function Login() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then(
      async (response) => {
        if (response.ok) {
          setShowAlert(true);
          const responseData = await response.json();
          localStorage.setItem("authToken", responseData?.data?.access_token);
          window.location.href = "/";
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
      <div className="col-6">Enter username and password to continue</div>
      <UAlert
        message="User logged in successfully"
        show={showAlert}
        toggleAlert={toggleAlert}
      />
      <form onSubmit={handleSubmit}>
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

export default Login;
