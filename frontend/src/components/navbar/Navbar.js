import React, { useState, useEffect, useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import axios from "axios";
import userContext from '../../context/userContext';
import Logo from '../../images/logo3.png'

import './Navbar.css'

export default function Navbar() {

    // const { isLogIn, setIsLogIn } = useContext(UserContext)
    // const history = useHistory();

    const submit = async (e) => {
        e.preventDefault()
        // const loginUser = {
        //     email: document.getElementById("email").value,
        //     password: document.getElementById("password").value,
        // }
        // console.log(process.env.REACT_APP_API_URL + "/home/logIn")
        // await axios.post(process.env.REACT_APP_API_URL + "/home/logIn", loginUser, { withCredentials: true }) //withCredentials => pour indiquer à Axios de passer le Cookie
        //     .then((res) => {
        //         if (res.data.message === "You are connected") {
        //             localStorage.setItem("isLogin", "true");
        //             history.push("/home");
        //         }
        //         else if (res.data.message === "Account waiting for validation") {
        //             history.push("/waitingforvalidation");
        //         }
        //         else {
        //             alert("Invalid email or password");
        //         }
        //     })
        //     .catch((err) => {
        //         console.log("coté front   ", err);
        //     });
        // console.log(loginUser);
    }

    // useEffect(() => {
    //     axios.get(process.env.REACT_APP_API_URL + `/profil`, { withCredentials: true })
    //         .then((res) => {
    //             setUser(res.data.data);
    //         })
    //         .catch((err) => {
    //             console.log("coté front   ", err);
    //         });
    // }, []);

    const logout = () => {
        // axios.get(process.env.REACT_APP_API_URL + "/home", { withCredentials: true })
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log("coté front   ", err);
        //     });
    }

    return (

        <nav className="navbar">
            <NavLink className="nav-logo" to="/">
                <button>
                <img src={Logo} alt="" />
                </button>
            </NavLink>
            <div className="nav-links">
                <NavLink exact activeClassName="active" to="/home" ><button className="nav-link"><i className="fas fa-home"></i></button></NavLink>
                <NavLink exact activeClassName="active" to="/games"><button className="nav-link"><i className="fas fa-gamepad"></i></button></NavLink>
                <NavLink exact activeClassName="active" to="/community"><button className="nav-link"><i className="fas fa-users"></i></button></NavLink>
                <NavLink exact activeClassName="active" to="/profile"><button className="nav-link"><i className="fas fa-user"></i></button></NavLink>
            </div>
            <div className="nav-settings">
                <NavLink exact to="/"><button className="nav-link" onClick={logout}><i class="fas fa-sign-out-alt"></i></button></NavLink>
            </div>
            {/* {userData ? (
                <>
                <div className="nav-links">
                <NavLink exact activeClassName="active" to="/" ><button className="nav-link"><i className="fas fa-home"></i></button></NavLink>
                <NavLink exact activeClassName="active" to="/games"><button className="nav-link"><i className="fas fa-gamepad"></i></button></NavLink>
                <NavLink exact activeClassName="active" to="/community"><button className="nav-link"><i className="fas fa-users"></i></button></NavLink>
                <NavLink exact activeClassName="active" to="/profile"><button className="nav-link"><i className="fas fa-user"></i></button></NavLink>
                <NavLink exact to="/"><button className="nav-link" onClick={logout}><i class="fas fa-sign-out-alt"></i></button></NavLink>
                </div>
                </>
                ):(
                <>
                <div className="login">
                    <form onSubmit={submit}>
                        <input className="nav-input" type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <input className="nav-input" type="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        <input type="submit" value="Login" className="nav-login" />
                    </form>
                    <button className="forgot-password">Forgot your password ?</button>
                </div>
                </>)
                } */}
            
        </nav>
    );
}
