import { useRef } from "react";

export function SignUp() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUpHandler = (event) => {
    event.preventDefault();

    if (firstNameRef)
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
      // fetch("localhost:8080/signup")
      // Make an api/web service call to submit the user details
    } else {
      alert("Form is invalid");
    }
  };

  const updateFirstName = () => {
    console.log("on change called: ", firstNameRef);
    firstNameRef.current.value = firstNameRef.current.value.toUpperCase()
  };

  return (
    <>
      <div>Sign Up Page</div>
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
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
