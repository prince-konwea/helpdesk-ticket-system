import React from "react";
import "./mainpage.styles.css";
import Header from "../Header/header";
import { useNavigate } from "react-router-dom";



const Mainpage = () => {
   let navigate = useNavigate();

    return (
        <>
        <Header />
        <div className="mainpage">
           <h1>Please login or create an account</h1>
           <form>

            <button onClick={() => navigate("/signup")}>Sign up</button>
            <button onClick={() => navigate("/Login")}>Login</button>
           </form>
        </div>
        </>
    )
}

export default Mainpage;