import './navbar.styles.css';

import { Outlet,Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as VTELogo } from '../../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = ( ) => {

    const activePage = window.location.pathname;

    const [mobileNavState, setMobileNavState] = useState(false);

    const enableMobileNav = () => {
        setMobileNavState(true)
    }

    const disableMobileNav = () => {
        setMobileNavState(false)
    }

    return(
        <>
            <div className='nav-container'  >
                <div className="logo-container">
                    <Link to={'/'} >
                        <VTELogo className='logo'/>
                    </Link>
                </div>
                <nav className={mobileNavState ? "responsive_nav navbar" : "navbar"}>
                        <NavLink
                            className={({isActive})=>{
                                return 'nav-link' + (isActive ? ' active-link' : '')
                            }} 
                            onClick={disableMobileNav} 
                            to="/">
                            Home
                         </NavLink>
                        <NavLink
                            className={({isActive})=>{
                                return 'nav-link' + (isActive ? ' active-link' : '')
                            }} 
                            onClick={disableMobileNav} 
                            to="about-us">
                            About Us
                         </NavLink>
                        <NavLink
                            className={({isActive})=>{
                                return 'nav-link' + (isActive ? ' active-link' : '')
                            }} 
                            onClick={disableMobileNav} 
                            to="gallery">
                            Gallery
                         </NavLink>
                        <NavLink
                            className={({isActive})=>{
                                return 'nav-link' + (isActive ? ' active-link' : '')
                            }} 
                            onClick={disableMobileNav} 
                            to="contact-us">
                            Contact Us
                         </NavLink>


                        {/* <NavLink className='nav-link ' onClick={disableMobileNav} to="about-us">About Us</NavLink>
                        <NavLink className='nav-link ' onClick={disableMobileNav} to="gallery">Gallery</NavLink>
                        <NavLink className='nav-link ' onClick={disableMobileNav} to="contact-us">Contact Us</NavLink> */}
                        <button className='nav-btn nav-close-btn' onClick={disableMobileNav}>
                            <FaTimes/>
                        </button>
                </nav>
                        <button className='nav-btn ' onClick={enableMobileNav}>
                            <FaBars/>
                        </button>
            </div>
        <Outlet/>
        </>
    );
}

export default Navbar;