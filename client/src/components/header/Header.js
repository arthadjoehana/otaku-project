import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'
import LogoBlack from '../../images/logo-black.jpg'
import LogoWhite from '../../images/logo-white.jpg'

const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg justify-content-between align-middle">

                <Link to="/" className="logo col-md-2">
                    <img 
                        className="navbar-brand text-uppercase p-0 m-0"
                        src={LogoWhite}
                        onClick={() => window.scrollTo({top: 0})} 
                        alt="" />
                </Link>
                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
