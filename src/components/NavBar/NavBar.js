import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <NavLink className="navbar-brand" to="/">
            YourNextPhone
          </NavLink>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/categoria/samsung">
                Samsung
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/categoria/apple">
                Apple
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="Cart">
                <CartWidget />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
