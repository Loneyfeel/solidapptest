import React from 'react';
import style from './navmenu.module.sass';
import {useTranslation} from "react-i18next";
import NavMenuItem from "./NavMenuItem";
import {NavItems} from "../../types/types.ts";

const NavMenu: React.FC = () => {
    const {t} = useTranslation();

    const NAV_ITEMS: NavItems = {
        radar: {
            to: '/radar',
            icons: {
                colored: 'src/assets/Navbar/radar-colored.png',
                gray: 'src/assets/Navbar/radar-gray.svg'
            },
            label: t("app.navMenu.radar")
        },
        market: {
            to: '/market',
            icons:
                {
                    colored: 'src/assets/Navbar/market-colored.png',
                    gray: 'src/assets/Navbar/market-gray.svg'
                },
            label: t("app.navMenu.market")
        },
        home: {
            to: '/',
            icons:
                {
                    colored: 'src/assets/Navbar/starship-colored.svg',
                    gray: 'src/assets/Navbar/starship-gray.svg'
                },
            label: t("app.navMenu.home"),
            isHome: true
        },
        tasks: {
            to: '/tasks',
            icons:
                {
                    colored: 'src/assets/Navbar/tasks-colored.png',
                    gray: 'src/assets/Navbar/tasks-gray.svg'
                },
            label: t("app.navMenu.tasks")
        },
        friends: {
            to: '/friends',
            icons:
                {
                    colored: 'src/assets/Navbar/friends-colored.png',
                    gray: 'src/assets/Navbar/friends-gray.svg'
                },
            label: t("app.navMenu.friends")
        },
    }

    return (
        <>
            <div className={style.navmenu}>
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

