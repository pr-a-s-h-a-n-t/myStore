import React from 'react'
import "./Navigation.css"
import {signInWithGoogle} from "./FirebaseConfig"
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";



function Navigation({ size, setShow }) {

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const profilePhoto = localStorage.getItem("profilePic")

  const styles = {
    login: {
      // border: "2px solid red",
      width: "12rem",
      alignItem: "center",
      justifyContent: "center",
      display: "flex",
      paddingTop: "1rem",

      img : {
        width :"2rem",
        height: "2rem",
        borderRadius : "100%",

      },

      name : {
        marginLeft: "5px",

      }


    }

  }


  return (
    <div className='nav_container'>

      <h1  ><i className="fa-solid fa-location-dot" />MYSTORE  </h1>
      <nav  >
        <ul className='navLinks' >
          <li  ><Link to="/">Home  </Link>   </li>
          <li
          // onClick={() => setShow(true)}
          ><Link to="/shop">Shop </Link>         </li>
          {name ? <li onClick={( ) => {
            localStorage.clear();
            window.location.reload()

          }}> LogOut   </li>  :
          <li onClick={signInWithGoogle}> SignIn</li>
          }
          <li>  Track Order </li>
          {name ? 
            <div style={styles.login} > 
            <span><img style={styles.login.img }  src={profilePhoto} alt="profile Photo"/></span>
           <span style={styles.login.name }>  {name}</span></div> : ""
          }

        </ul>
        <span
         id = "cart-logo"
         onClick={() => setShow(false)}>
          <Link to="/cart">   <i className="fas fa-cart-plus"></i></Link>
          <span>{size}</span>
        </span>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navigation
