import React, { useState, useContext } from 'react';
import UserContext from "../../context/userContext";
import { Link } from 'react-router-dom'

export default function SettingsSubMenu() {
    const { userData, setUserData } = useContext(UserContext);
    const [dropdown, setDropdown] = useState(false)
    const settingsSubMenu = () => {
        setDropdown(true)
    }

    return ( 
        <div className="settingssubmenu">
            <button className="navlink" onClick={userSubMenu}>{userData.user.displayName}</button>
            <div>
                {userSubMenu ? (
                    <>
                    <Link to="">{userData.user.displayName}</Link>
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