import React from "react";
import Header from "../Header/header";

import "./login.styles.css";

const Login = () => {
    return(
        <>
        <Header />
        <div className="login-form">
           <form>
         <input placeholder="Email" type="text" />
         <input placeholder="Enter Password" type="password" />
         <button>login</button>
         </form>

        </div>
        </>
    )
}

export default Login;