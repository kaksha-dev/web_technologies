import { useRef, useState } from "react";
import { PageTitle } from "../elements/pageTitle";

export function SignUp() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showFailureAlert, setShowFailureAlert] = useState(false);

  const signUpHandler = async (event) => {
    event.preventDefault();

    var formValuesObject = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log("The event is: ", event);
    console.log("The form values are  is: ", formValuesObject);

    if (
      formValuesObject.firstName &&
      formValuesObject.lastName &&
      formValuesObject.email &&
      formValuesObject.password
    ) {
      console.log("Submit this form");

      // Make an api/web service call to submit the user details
      var response = await fetch(
        `${import.meta.env.VITE_NODEJS_BACKEND}/user`,
        {
          method: "POST",
          body: JSON.stringify({ ...formValuesObject }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (
        response.ok &&
        (response.status == "201" || response.status == "200")
      ) {
        setShowFailureAlert(false);
        setShowSuccessAlert(true);
      } else {
        setShowSuccessAlert(false);
        setShowFailureAlert(true);
      }
      console.log("The response of POST API call is ", response);
    } else {
      setShowFailureAlert(true);
    }
  };

  const updateFirstName = () => {
    console.log("on change called: ", firstNameRef);
    // let formattedValue = firstNameRef.current.value.toUpperCase();
    // firstNameRef.current.value = formattedValue;
  };

  return (
    <>
      <PageTitle>Signup Page</PageTitle>

      {showSuccessAlert && (
        <div className="alert alert-success" role="alert">
          User created successfully
        </div>
      )}

      {showFailureAlert && (
        <div className="alert alert-danger" role="alert">
          Error creating user
        </div>
      )}

      <form className="row g-3" onSubmit={signUpHandler}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            ref={firstNameRef}
            onChange={updateFirstName}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            ref={lastNameRef}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            ref={emailRef}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            ref={passwordRef}
          />
        </div>
        <div className="col-12" style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
