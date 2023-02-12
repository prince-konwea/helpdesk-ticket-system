import React from "react";
import Header from "../Header/header";
import "./signup.styles.css";

const SignUp = () => {
    return(
        <>
        <Header />
        <div className="signup-form">
           <form>
         <input placeholder="Email" type="text" />
         <input placeholder="Enter Password" type="password" />
         <button>Sign up</button>
         </form>

        </div>
        </>
    )
}

export default SignUp;