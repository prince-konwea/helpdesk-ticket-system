import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.css";

const Header = () => {

 return(
    <div className="header-nav">
    <h1 className="logo"><Link to="/" style={{textDecoration: "none", color: "white"}}>HelpDesk</Link></h1>
    <button>Logout</button>
   </div>
 )
};


export default Header;