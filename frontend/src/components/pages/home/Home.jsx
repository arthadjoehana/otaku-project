import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';
import Register from '../Register';

import './Home.css'

export default function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/");
    }, []);

    return (
        <div>
            <div className="home">
                <div className="home-header">
                Welcome, {userData.user.displayName}
                </div>    
            </div>
        </div>
    );
}