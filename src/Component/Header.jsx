import React from 'react';
import { NavLink, Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="landing-div">
      <div>
        <Link to={"/"}>
          <img className='logo-img' src={"https://t4.ftcdn.net/jpg/05/11/57/33/360_F_511573386_7OGsN9hPKjcP1QHJG5IyAoBKcaQANHd1.jpg"} alt="" />
        </Link>
      </div>
          <div>
              <NavLink className="links" exact to="/">Home</NavLink>
              <NavLink className="links" to="/about">About Us</NavLink>
              <NavLink className="links" to="/services">Services</NavLink>
              <NavLink className="links" to="/contact-us">Contact Us</NavLink>
              <NavLink className="links" to="/login">Log In</NavLink>
              <button id='btn-get-started'>Get Started</button>
          </div>
    </nav>
  );
}

export default Header;
