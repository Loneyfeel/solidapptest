import React from 'react';
import style from './navmenu.module.sass';
import {useTranslation} from "react-i18next";
import NavMenuItem from "./NavMenuItem";
import {NavItems} from "../../types/types.ts";

import radarColored from '../../assets/Navbar/radar-colored.png'
import radarGray from '../../assets/Navbar/radar-gray.svg'
import marketColored from '../../assets/Navbar/market-colored.png'
import marketGray from '../../assets/Navbar/market-gray.svg'
import starshipColored from '../../assets/Navbar/starship-colored.svg'
import starshipGray from '../../assets/Navbar/starship-gray.svg'
import tasksColored from '../../assets/Navbar/tasks-colored.png'
import tasksGray from '../../assets/Navbar/tasks-gray.svg'
import friendsColored from '../../assets/Navbar/friends-colored.png'
import friendsGray from '../../assets/Navbar/friends-gray.svg'

import navMenuBackground from '../../assets/Navbar/navbar-background.svg'

const NavMenu: React.FC = () => {
    const {t} = useTranslation();

    const NAV_ITEMS: NavItems = {
        radar: {
            to: '/radar',
            icons: {
                colored: radarColored,
                gray: radarGray
            },
            label: t("app.navMenu.radar")
        },
        market: {
            to: '/market',
            icons:
                {
                    colored: marketColored,
                    gray: marketGray
                },
            label: t("app.navMenu.market")
        },
        home: {
            to: '/',
            icons:
                {
                    colored: starshipColored,
                    gray: starshipGray
                },
            label: t("app.navMenu.home"),
            isHome: true
        },
        tasks: {
            to: '/tasks',
            icons:
                {
                    colored: tasksColored,
                    gray: tasksGray
                },
            label: t("app.navMenu.tasks")
        },
        friends: {
            to: '/friends',
            icons:
                {
                    colored: friendsColored,
                    gray: friendsGray
                },
            label: t("app.navMenu.friends")
        },
    }

    return (
        <>
            <div className={style.navmenu}
            style={{
                backgroundImage: `url(${navMenuBackground})`
            }}>
                <div className={style.navmenu__content}>
                    <NavMenuItem {...NAV_ITEMS.radar} />
                    <NavMenuItem {...NAV_ITEMS.market} />
                    <div className={style.navmenu__content__home}>
                        <div className={style.navmenu__content__home__starship}>

                        </div>
                    </div>
                    <NavMenuItem {...NAV_ITEMS.home} />
                    <NavMenuItem {...NAV_ITEMS.tasks} />
                    <NavMenuItem {...NAV_ITEMS.friends} />
                </div>
            </div>
        </>
    );
};

export default NavMenu;

