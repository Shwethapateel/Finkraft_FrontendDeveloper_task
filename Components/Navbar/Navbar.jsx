import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "./navbar.css"
let Navbar = () => {
  let navigate = useNavigate()
  let role = localStorage.getItem("role")

    let handleLogout = () => {
      const confirmation = window.confirm("Are you sure you want to log out?");
      if (confirmation) {
        localStorage.clear();
        navigate("/login");
      }
    };


  return (
    <nav id="navbar">
      <article>
        <h2 id="logo">COMPANY_LOGO</h2>
        <ul id="menu">
          <li><Link to="/home">HOME</Link></li> 
          <li><Link to={"/about"}>ABOUT</Link></li>
          { role === "admin" ? <li><Link to='/admin'>ADMIN DASHBOARD</Link></li> : null}
          {role ? <a id="logout" to="/login" onClick={handleLogout}>LOGOUT</a> : <>
                    <li><Link to="/login">LOGIN</Link></li>
          </>}
        </ul>
      </article>
    </nav>
  );
};
export default Navbar;