import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { FaBars, GrClose } from '../../utility/ExportTopNavigationIcons';

const HeaderNavigation = () => {
    const [ sidebar, setSidebar ] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className='top-navbar-container'>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='top-nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <GrClose/>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Logo/>
        </div>
    )
}

export default HeaderNavigation;