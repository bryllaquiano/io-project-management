import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
    return (
        <>
            <nav className='mobile-nav'>
                <ul>
                    <li>Home</li>
                    <li>Active Board</li>
                    <li>My Boards</li>
                    <li>Add New Board</li>
                </ul>
            </nav>
        </>
    )
}

export default MobileNav;