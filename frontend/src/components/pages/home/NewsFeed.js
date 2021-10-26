import React, { useEffect, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../../../context/userContext';

import Post from './Post';

export default function NewsFeed () {
    const {userData} = useContext(UserContext);
    const history = useHistory();

    return (
        <div className="newsfeed">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}