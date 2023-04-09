import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          <span className="navbar-toggler-icon">
            {/* <li className="nav-item">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
 
      <li className="nav-item">
        <a className="nav-link" href="#">Doctors</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us</a>
      </li> */}
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link className="nav-item" to="/#">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/#services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#doctors">
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/#contactus">
                Contact Us
              </Link>
            </li> */}
           <a className="nav-item" href="/#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#doctors">
                Doctors
              </a>
            </li>
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
            {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
            {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      
    </form> */}
          <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
            Sign Up
          </button>
          <Link to="/signin">
        
          <button
            className="mx-1 btn btn-outline-light my-2 my-sm-0"
            type="submit"
          >
            Sign in
          </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
