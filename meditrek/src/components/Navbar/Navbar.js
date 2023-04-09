import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <a className="navbar-brand" href="#">
          Meditrek
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#doctors">
                Doctors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#services">
                Services
              </a>
            </li>
            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/appointment">
                    Schedule Appointment
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/healthreport">
                   HealthReport 
                  </a>
                </li>
              </>
            ) : (
              <li></li>
            )}
            <li className="nav-item">
              <a className="nav-link" href="/#aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contactus">
                Contact Us
              </a>
            </li>
          </ul>
          {isAuthenticated ? (
            <li>
              <button
                className="mx-1 btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="mx-1 btn btn-outline-light my-2 my-sm-0"
                type="submit"
                onClick={() => loginWithRedirect()}
              >
                Sign in
              </button>
            </li>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
