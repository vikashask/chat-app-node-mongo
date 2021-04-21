import React from "react";

const Navbar = (props) => {
  return (
    <>
      <nav className="green">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Logo
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">SignUp</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="">Signup</a>
        </li>
        <li>
          <a href="">Logout</a>
        </li>
      </ul>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
