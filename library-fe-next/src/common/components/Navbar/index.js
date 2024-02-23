import Link from "next/link";
import UButton from "../ubutton";
import { logout } from "@/utils/helpers";
import useIsUserLoggedIn from "@/common/hooks/useIsUserLoggedIn";
import { useEffect, useState } from "react";

function Navbar() {
  const isUserLoggedIn = useIsUserLoggedIn();
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    if (isUserLoggedIn) {
      fetchUserDetails();
    }
  }, [isUserLoggedIn]);

  const fetchUserDetails = () => {
    fetch("http://localhost:8080/users/profile", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("authToken"),
      },
    }).then(
      async (res) => {
        if (res.ok) {
          let user = await res.json();
          setUserDetails(user);
        }
      },
      (err) => {}
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link href="/" className="btn btn-secondary">
            <h4>UL</h4>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link href="/addbook" className="btn btn-light">
                  Add New Book
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            {isUserLoggedIn && <div>Welcome {userDetails.firstName}</div>}
            {!isUserLoggedIn && (
              <UButton variant="primary">
                <Link
                  href="/login"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Login
                </Link>
              </UButton>
            )}
            {!isUserLoggedIn && (
              <UButton variant="primary">
                <Link
                  href="/signup"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Register
                </Link>
              </UButton>
            )}
            {isUserLoggedIn && (
              <UButton variant="primary" onClick={logout}>
                Logout
              </UButton>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
