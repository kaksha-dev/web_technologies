import { Link } from "react-router-dom";
import { Button } from "./components/elements/button";

export function Header() {  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <Link to={"/"} className="navbar-brand">
            EComm
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/signin"} className="nav-link">
                  Home
                </Link>
              </li>
            </ul>

            <Button type="primary">
              <Link to={"addproduct"} className="nav-link">
                Add Products
              </Link>
            </Button>

            <Button type="primary">
              <Link to={"signin"} className="nav-link">
                Signin
              </Link>
            </Button>

            <Button type="secondary">
              <Link to={"signup"} className="nav-link">
                Register
              </Link>
            </Button>

            {/* <button className="btn btn-outline-success mx-3" onClick={navigateToSignup}>Signup</button> */}
          </div>
      </nav>
    </>
  );
}
