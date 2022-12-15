import React from 'react'
import "./Navigation.css"
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";



function Navigation({ size, setShow }) {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className='nav_container'>
      <button className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
      <h1  >myStore</h1>
      <nav ref={navRef}>
        <ul className='navLinks' >
          <li onClick={() => setShow(true)}><Link to="/">Home</Link>    </li>
          <li>  Shop       </li>
          <li>  Knowledge  </li>
          <li>  Track Order </li>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </ul>
        <span onClick={() => setShow(false)}>
        <Link to="/cart">   <i className="fas fa-cart-plus"></i></Link>
          <span>{size}</span>
        </span>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
