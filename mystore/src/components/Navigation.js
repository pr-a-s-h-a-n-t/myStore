import React from 'react'
import "./Navigation.css"
 
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";



function Navigation({ size, setShow }) {

   

  return (
    <div className='nav_container'>
       
      <h1  >myStore</h1>
      <nav  >
        <ul className='navLinks' >
          <li  ><Link to="/">Home  </Link>   </li>
          <li 
          // onClick={() => setShow(true)}
          ><Link to="/shop">Shop </Link>         </li>
          <li>  Knowledge  </li>
          <li>  Track Order </li>
          
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
