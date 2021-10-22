import React from 'react';
import { HomeInactive, ActiveBoardInactive, MyBoardsInactive, AddBoardInactive, MoreInactive } from '../../utility/ExportMobileNavigationIcons';

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