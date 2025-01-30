import React from 'react';
import style from './appcontent.module.sass'
import {Routes, Route} from 'react-router-dom';
import {APP_ROUTES} from '../../constants/routes';
import {useTelegramNavigation} from '../../share/hooks/useTelegramNavigation';
import NavMenu from '../NavMenu';

export const AppContent: React.FC = () => {
    useTelegramNavigation();

    return (
        <>
            <div className={style.appcontent}>
                <Routes>
                    {APP_ROUTES.map(({path, element}) => (
                        <Route key={path} path={path} element={element}/>
                    ))}
                </Routes>
                <NavMenu/>
            </div>
        </>
    )
};