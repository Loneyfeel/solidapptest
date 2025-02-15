import React from 'react';
import MainPage from "../screens/MainPage";
import Radar from "../screens/Radar";
import Market from "../screens/Market";
import Tasks from "../screens/Tasks";
import Friends from "../screens/Friends";
import Profile from "../screens/Profile";
import Robots from "../screens/Robots";

interface AppRoute {
    path: string;
    element: React.ReactNode;
}

export const APP_ROUTES: AppRoute[] = [
    { path: "/", element: <MainPage /> },
    { path: "/radar", element: <Radar /> },
    { path: "/market", element: <Market /> },
    { path: "/tasks", element: <Tasks /> },
    { path: "/friends", element: <Friends /> },
    { path: "/profile", element: <Profile /> },
    { path: "/robots", element: <Robots /> },
];