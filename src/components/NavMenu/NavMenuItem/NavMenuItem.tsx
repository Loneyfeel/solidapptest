// NavMenuItem.tsx
import React from 'react';
import style from './navmenuitem.module.sass';
import {NavLink} from "react-router-dom";
import {NavItem} from "../../../types/types.ts";

type NavMenuItemProps = NavItem;

const NavMenuItem: React.FC<NavMenuItemProps> = ({to, icons, label, isHome}) => {
    return (
        <NavLink
            to={to}
            className={({isActive}) =>
                `${style.navmenuitem} ${isActive ? style.navmenuitem_active : ''}`
            }
            style={{
                width: `${isHome ? '25%' : ''}`
            }}
        >
            {({isActive}) => (
                <>
                    {isHome ?
                        (<>
                            <div className={`blur_40 ${style.navmenuitem__homeButton}`}>
                                <div className={style.navmenuitem__homeButton__icon}>
                                    <img src={isActive ? icons.colored : icons.gray} alt={''} className={style.navmenuitem__homeButton__icon_img}/>
                                </div>
                            </div>
                        </>)
                        :
                        (<>
                        <div className={style.navmenuitem__icon}>
                                <img src={isActive ? icons.colored : icons.gray} alt=""
                                     className={style.navmenuitem__icon_img}/>
                            </div>
                        </>)
                    }
                    <div className={style.navmenuitem__label}>
                        <p className={`text_link text_opacity_50 text_center ${style.navmenuitem__label_text}
                        ${isActive ? style.navmenuitem_active : ''}`}
                           style={{
                               color: `${isHome ? '#FFFFFF' : ''}`,
                               fontSize: `${isHome ? '14px' : ''}`,
                           }}>
                            {label}
                        </p>
                    </div>
                </>
            )}
        </NavLink>
    );
};

export default NavMenuItem;