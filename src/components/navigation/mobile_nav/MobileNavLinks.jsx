import React from 'react';
import { HomeActive, CurrentBoardActive, MyBoardsActive, AddBoardActive, MoreActive} from '../../utility/ExportMobileNavIcons';
import { HomeInactive, CurrentBoardInactive, MyBoardsInactive, AddBoardInactive, MoreInactive } from '../../utility/ExportMobileNavIcons';

export const MobileNavLinks = [
    {
        title: "Home",
        path: '/',
        activeIcon: <HomeActive className='home-active-icon active-icon'/>,
        inactiveIcon: <HomeInactive  className='home-inactive-icon inactive-icon'/>,
        cName: 'home-link'
    },
    {
        title: "Current Board",
        path: '/current-board',
        activeIcon: <CurrentBoardActive className='current-board-active-icon active-icon' />,
        inactiveIcon: <CurrentBoardInactive className='current-board-inactive-icon inactive-icon'/>,
        cName: 'active-board-link'
    },
    {
        title: "My Boards",
        path: '/my-boards',
        activeIcon: <MyBoardsActive className='my-boards-active-icon active-icon'/>,
        inactiveIcon: <MyBoardsInactive className='my-boards-inactive-icon inactive-icon'/>,
        cName: 'my-boards-link'
    },
    {
        title: "Add Board",
        path: '/add-board',
        activeIcon: <AddBoardActive className='add-board-active-icon active-icon'/>,
        inactiveIcon: <AddBoardInactive className='add-board-inactive-icon inactive-icon'/>,
        cName: 'add-board-link'
    },
    {
        title: "More Options",
        path: '/more',
        activeIcon: <MoreActive className='more-options-active-icon active-icon'/>,
        inactiveIcon: <MoreInactive className='more-options-inactive-icon inactive-icon'/>,
        cName: 'more-options-link'
    }
]