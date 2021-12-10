import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import UserCard from '../UserCard'
import Avatar from '../Avatar'

const LeftSideBar = () => {
    const { auth } = useSelector(state => state)

    return (
        <div className="leftbar mt-3">
            <NavLink activeClassName="active" className="leftbar-link" to="">
            <Avatar src={auth.user.avatar} size="medium-avatar" /> {auth.user.username}
            </NavLink>
            <NavLink activeClassName="active" className="leftbar-link" to="">
                Store
            </NavLink>
            <NavLink activeClassName="active" className="leftbar-link" to="">
                Mangas
            </NavLink>
            <NavLink activeClassName="active" className="leftbar-link" to="">
                Animes
            </NavLink>
            <NavLink activeClassName="active" className="leftbar-link" to="">
                Games
            </NavLink>
            <NavLink activeClassName="active" className="leftbar-link" to="">
                Find people
            </NavLink>
            <NavLink activeClassName="active" className="leftbar-link" to="">
                Groups
            </NavLink>
            <NavLink activeClassName="active" className="leftbar-link" to="">
                Events
            </NavLink>
            <NavLink activeClassName="active" className="leftbar-link" to="">
                Watch live
            </NavLink>
        </div>
    )
}

export default LeftSideBar
