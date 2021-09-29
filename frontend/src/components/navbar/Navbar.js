import React, { useState, useContext } from 'react'
import { withRouter, NavLink, useHistory } from 'react-router-dom'
import UserContext from "../../context/userContext"
import axios from "axios"
import ErrorNotice from "../misc/ErrorNotice"

import './NavBar.css'
import UserSubMenu from './UserSubMenu'

export default function NavBar() {
    
    const { userData, setUserData } = useContext(UserContext)
    const history = useHistory()

    const register = () => history.push("/register")
    const login = () => history.push("/login")
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","")
    }

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const submit = async (e) => {
        e.preventDefault()
        try{
            const loginUser = {email, password}
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser)
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            })
            localStorage.setItem("auth-token", loginResponse.data.token)
            history.push("/")
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    }

    const [userDropdown, setUserDropdown] = useState(false)
    const userSubMenu = () => {
        if (userDropdown) {
            setUserDropdown(false)
        } else {
            setUserDropdown(true)
        }
        
    }
    
    const [settingsDropdown, setSettingsDropdown] = useState(false)
    const settingsSubMenu = () => {
        if (settingsDropdown) {
            setSettingsDropdown(false)
        } else {
            setSettingsDropdown(true)
        }
        
    }

    return ( 
        <withRouter>
        <nav className="navbar">
            
            <div className="auth-options">
            {userData.user ? (
                <>
                <NavLink className="navlogo" to="/"><button><i className="fas fa-circle"></i><span> TAKU</span></button></NavLink>
                <div className="navlinks">
                    <NavLink exact to="/" activeClassName="active"><button className="navlink"><i className="fas fa-home"></i></button></NavLink>
                    <NavLink exact activeClassName="active" to="/games"><button className="navlink"><i className="fas fa-gamepad"></i></button></NavLink>
                    <NavLink exact activeClassName="active" to="/community"><button className="navlink"><i className="fas fa-users"></i></button></NavLink>
                    <NavLink exact activeClassName="active" to="/profile"><button className="navlink"><i className="fas fa-user"></i></button></NavLink>
                    
                </div>
                <div className="navlinks2">
                    <button className="navlink2" onClick={userSubMenu}><i className="fas fa-bell"></i></button>
                    <button className="navlink2" onClick={settingsSubMenu}><i className="fas fa-cog"></i></button>
                    <button className="navlink2" onClick={logout}><i className="fas fa-sign-out-alt"></i></button>
                </div>
                </>
            ) : (
                <>
                <NavLink className="navlogo" to="/"><button><i className="fas fa-circle"></i><span> TAKU</span></button></NavLink>
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
            </div>
        </nav>
        </withRouter>
        
    );
    
}
 