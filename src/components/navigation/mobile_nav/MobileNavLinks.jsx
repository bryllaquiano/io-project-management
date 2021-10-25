import React from 'react';
import { HomeActive, ActiveBoardActive, MyBoardsActive, AddBoardActive, MoreActive} from '../../utility/ExportMobileNavIcons';
import { HomeInactive, ActiveBoardInactive, MyBoardsInactive, AddBoardInactive, MoreInactive } from '../../utility/ExportMobileNavIcons';

export const MobileNavLinks = [
    {
        title: "Home",
        path: '/',
        activeIcon: <HomeActive/>,
        inactiveIcon: <HomeInactive/>
    },
    {
        title: "Active Board",
        path: '/active-board',
        activeIcon: <ActiveBoardActive/>,
        inactiveIcon: <ActiveBoardInactive/>
    },
    {
        title: "My Boards",
        path: '/my-boards',
        activeIcon: <MyBoardsActive/>,
        inactiveIcon: <MyBoardsInactive/>
    },
    {
        title: "Add Board",
        path: '/add-board',
        activeIcon: <AddBoardActive/>,
        inactiveIcon: <AddBoardInactive/>
    },
    {
        title: "More",
        path: '/more',
        activeIcon: <MoreActive/>,
        inactiveIcon: <MoreInactive/>
    }
]