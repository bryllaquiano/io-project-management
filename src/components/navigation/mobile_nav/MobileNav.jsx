import React from 'react';
import { MobileNavLinks } from './MobileNavLinks';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
        <>
            <nav className='mobile-nav'>
                <ul>
                    {MobileNavLinks.map(( item, index ) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.activeIcon}
                                    {item.inactiveIcon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default MobileNav;