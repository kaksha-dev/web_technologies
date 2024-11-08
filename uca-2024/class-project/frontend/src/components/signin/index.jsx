import { useRef } from "react";

export function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUpHandler = (event) => {
    event.preventDefault();

    var formValuesObject = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log("The event is: ", event);
    console.log("The form values are  is: ", formValuesObject);

    if (
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

  return (
    <>
      <form className="g-3" onSubmit={signUpHandler}>
        <div className="row justify-content-md-center">
          <div className="col-6">
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
        </div>
        <div className="row justify-content-md-center">
          <div className="col-6">
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
        </div>
        <div className="row justify-content-md-center">
          <div className="col-2 justify-content-md-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
