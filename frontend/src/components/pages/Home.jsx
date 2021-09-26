import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../context/userContext';
import Register from './Register';

export default function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!userData.user)
            history.push("/login");
    }, []);

    return (
        <div>
            {userData.user ? (
                <h1>Welcome {userData.user.displayName}</h1>
            ) : (
                <Register />
            )}
        </div>
    );
}
