import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../../context/userContext";
import ErrorNotice from "../../misc/ErrorNotice";

import './Register.css'

export default function Register () {

    const history = useHistory()

    const submit = (e) => {
        e.preventDefault();

        // const formData = new FormData(); // On crée/rend accessible le formData

        // formData.append("email", document.getElementById("email").value)
        // formData.append("password", document.getElementById("password").value)
        // formData.append("userName", document.getElementById("userName").value)
        // formData.append("birthDay", document.getElementById("birthDay").value)
       
        // console.log("Submit");

        // for (var value of formData.values()) {
        //     console.log(value);
        // }

        // console.log("END Submit");

        // axios.post(process.env.REACT_APP_API_URL + "/home/register", formData, { withCredentials: true })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log("coté front   ", err);
        //     });
        //     history.push("/home");
    };

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const [passwordChecked, setPasswordChecked] = useState(false)
    const [confirmPasswordChecked, setConfirmPasswordChecked] = useState(false)

    const [completedForm, setCompletedForm] = useState(false)

    // useEffect(() => {

    //     if (password.length > 7) {
    //         setPasswordChecked(true)
    //     } else {
    //         setPasswordChecked(false)
    //     }
    //     if (password === confirmPassword) {
    //         setConfirmPasswordChecked(true)
    //     } else {
    //         setConfirmPasswordChecked(false)
    //     }

    //     if (passwordChecked) {
    //         if (confirmPasswordChecked) {
    //             setCompletedForm(true)
    //         } else {
    //             setCompletedForm(false)
    //         }
    //     } else {
    //         setCompletedForm(false)
    //     }

    // }, [
    //     password,
    //     confirmPassword,
    //     passwordChecked,
    //     confirmPasswordChecked,
    // ]);
   
    return ( 
        <div className="register">

            <form onSubmit={submit}>

                <h2 className="label">Join the Otaku community</h2>

                <label className="label">Username: </label>
                <input className="register-element" type="text" id="userName" required />

                <label className="label">Email: </label>
                <input className="register-element" type="email" id="email" required />

                <label className="label">Birthday: </label>
                <input className="register-element" type="date" id="birthday" required />

                <label className="label">Password: </label>
                {passwordChecked ?
                    <p className="label">Ok</p>
                    : 
                    <p className="label">Password must be at least 8 characters</p>
                        
                }
                <input className="register-element" type="password" id="password" onChange={e => setPassword(e.target.value)} required />
                {confirmPasswordChecked ?
                    <p className="label">Ok</p>
                    :
                    <p className="label">Password is not identical</p>
                }
                <input className="register-element" type="password" placeholder="Confirmer mot de passe" onChange={e => setConfirmPassword(e.target.value)} required />

                {completedForm ?
                    <button type="submit" className="register-button register-element">Sign up</button>
                    :
                    <button disabled type="submit" className="register-button register-element">Sign up</button>
                }
            </form>
        </div>
        );
}
