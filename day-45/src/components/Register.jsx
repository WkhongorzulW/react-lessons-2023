import { useState } from "react";
import {ToastContainer, toast} from "react-toastify";
import { Navigate } from "react-router-dom";
import Header from "./Header";

export default function Register(){
    const [formSubmitted, SetFormSubmitted] = useState(false);

    if(formSubmitted){
        return(
            <Navigate to="/login" />
        )
    }

    function onSubmit(e){
        e.preventDefault();
        toast("Registered!");
        SetFormSubmitted(true);
        toast("Registered!")
    }
    return(
        <div className="register">
            <Header />
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" />
                <br />
                <label htmlFor="username">User name: </label>
                <input type="text" name="username" />
                <br />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" />
                <br />
                <label htmlFor="phoneNumber">Phone number: </label>
                <input type="number" name="phoneNumber" />
                <button>Register</button>
            </form>
            <ToastContainer />
        </div>
    )
}