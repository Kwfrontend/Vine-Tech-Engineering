import './navbar.styles.css';

import { Outlet,Link } from 'react-router-dom';
import { useState } from 'react';

import { ReactComponent as VTELogo } from '../../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = ( ) => {


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
                    <Link to={'/'}>
                        <VTELogo className='logo'/>
                    </Link>
                <nav className={mobileNavState ? "responsive_nav navbar" : "navbar"}>
                        <a className='nav-link' onClick={disableMobileNav} href="/">Home</a>
                        <a className='nav-link ' onClick={disableMobileNav} href="#about">About Us</a>
                        <a className='nav-link ' onClick={disableMobileNav} href="#service">Gallery</a>
                        <a className='nav-link ' onClick={disableMobileNav} href="#projects">Contact Us</a>
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