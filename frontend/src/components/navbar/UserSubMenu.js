import React, { useState, useContext } from 'react';
import UserContext from "../../context/userContext";
import { Link } from 'react-router-dom'

export default function UserSubMenu() {
    const { userData, setUserData } = useContext(UserContext);
    const [dropdown, setDropdown] = useState(false)
    const userSubMenu = () => {
        setDropdown(true)
    }

    return ( 
        <div className="usersubmenu">
            <button className="navlink" onClick={userSubMenu}>{userData.user.displayName}</button>
            <div>
                {userSubMenu ? (
                    <>
                    <Link to="">My profile</Link>
                    <Link to="">Settings</Link>
                    <Link to="">Log out</Link>
                    </>
                ) : (
                    <>
                    
                    </>
                )}
            </div>
            
        </div>
    );
}