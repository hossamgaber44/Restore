import "./Navbar.css";
import { useState } from "react";
import {Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {

    const [toggle,setToggle] = useState(false);
  return (
   <div className="nav-bar">
     <div className="container">
     <div className="header">
      <HashLink to="#banner" className="nav-icon">
        <img src="img/logo1.png" alt="" ></img>
      </HashLink>
      <nav style={{ right: toggle && "0" }} className="navbar" >
      <div className="navbar-close-icon">
        <i  className="fa-solid fa-x" onClick={() => setToggle(false)}></i>
      </div>
      <ul className="navbar-links">
        <Link to="/"  onClick={() => setToggle(false)} className="navbar-link">
           Home
        </Link>
        <HashLink to="#services"  onClick={() => setToggle(false)} className="navbar-link">
          Services
        </HashLink>
        <HashLink to="#experience"  onClick={() => setToggle(false)} className="navbar-link">
          Experience
        </HashLink>
        <HashLink to="#process"  onClick={() => setToggle(false)} className="navbar-link">   
          Process
        </HashLink>
        <HashLink to="#plan"  onClick={() => setToggle(false)} className="navbar-link d-none">   
          Plans
        </HashLink>
        <HashLink to="#team"  onClick={() => setToggle(false)} className="navbar-link d-none">
          Team
        </HashLink>
        <HashLink to="#gallery"  onClick={() => setToggle(false)} className="navbar-link d-none">
          Gallery
        </HashLink>
        <HashLink to="#guide"  onClick={() => setToggle(false)} className="navbar-link d-none">
          Guide
        </HashLink>
        <Link to="/about"  onClick={() => setToggle(false)} className="navbar-link">   
           About US
        </Link>
        <Link to="/contact" onClick={() => setToggle(false)} className="navbar-link">
          Contact
        </Link>
      </ul>
     </nav>
     <div className="social-media">
          <Link to="https://www.facebook.com/profile.php?id=100054128583713&mibextid=ZbWKwL"> <i className="fab fa-facebook-f"></i></Link>
          <Link to="https://instagram.com/hossamgaberhamed?igshid=MzNlNGNkZWQ4Mg==" ><i className="fab fa-instagram"></i></Link>
          <Link to="https://github.com/hossamgaber44" ><i className="fa-brands fa-github"></i></Link>
       </div>
     <div onClick={() => setToggle(true)} className="top-header-menu">
      <i className="fa-solid fa-bars"></i>
      </div>
    </div>
     </div>
   </div>
  );
};

export default Navbar
