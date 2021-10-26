import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';

import NewsFeed from './NewsFeed';

import './Home.css'
import './Post.css'

export default function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    // useEffect(() => {
    //     if(!userData.user)
    //         history.push("/");
    // }, []);

    return (
        <div className="home">
            <NewsFeed />
        </div>
    );
}