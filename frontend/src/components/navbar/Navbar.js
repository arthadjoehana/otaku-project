import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";

import './Navbar.css'

export default function Navbar() {
    
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };

    return ( 
        <nav className="navbar">
            <NavLink to="/" className="navlogo"><button className="navlogo"><i className="fas fa-circle"></i><span> TAKU</span></button></NavLink>
            <nav className="auth-options">
            {userData.user ? (
                <>
                <button className="navlink">Home</button>
                <button className="navlink">Games</button>
                <button className="navlink">Community</button>
                <button className="navlink">Notifications</button>
                <button className="navlink">{userData.user.displayName}</button>
                <button className="navlink" onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                <div className="login">
                    {error && <ErrorNotice message={error} clearError={() => setError(undefined)} />}
                    <form onSubmit={submit}>
                        <input className="navinput" type="email" id="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <input className="navinput" type="password" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        <input type="submit" value="Login" className="navlogin" />
                        
                    </form>
                </div>
                </>
            )}
        </nav>
        </nav>
    );
    
}
 