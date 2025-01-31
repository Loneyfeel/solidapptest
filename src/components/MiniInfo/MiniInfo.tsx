import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import style from './miniinfo.module.sass';
import { MiniInfoProps } from "../../types/types.ts";
import { formatTimeFromTimestamp } from "../../share/helps/formatTime.ts";

interface ExtendedMiniInfoProps extends MiniInfoProps {
    timestamp?: number;
    link?: string;
}

const MiniInfo: React.FC<ExtendedMiniInfoProps> = ({
                                                       icon,
                                                       iconSize = 24,
                                                       title,
                                                       text,
                                                       timestamp,
                                                       link
                                                   }) => {
    const [currentTime, setCurrentTime] = useState<string>(
        timestamp ? formatTimeFromTimestamp(timestamp) : (title || '')
    );

    useEffect(() => {
        if (!timestamp) return;

        const interval = setInterval(() => {
            const formattedTime = formatTimeFromTimestamp(timestamp);
            setCurrentTime(formattedTime);

            if (timestamp <= Date.now()) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timestamp]);

    // Основной контент компонента
    const content = (
        <div className={style.miniinfo__content}>
            <div
                className={style.miniinfo__content__icon}
                style={{
                    width: `${iconSize}px`,
                    height: `${iconSize}px`
                }}
            >
                <img
                    src={icon}
                    alt=""
                    className={style.miniinfo__content__icon_img}
                />
            </div>
            <div className={style.miniinfo__content__data}>
                <div className={style.miniinfo__content__data__title}>
                    <p className={`${link ? 'text_link' : ''} ${style.miniinfo__content__data__title_text}`}>
                        {timestamp ? currentTime : title}
                    </p>
                </div>
                <div className={style.miniinfo__content__data__description}>
                    <p className={`text_opacity_50 ${link ? 'text_link' : ''} ${style.miniinfo__content__data__description_text}`}>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );

    // Если есть ссылка, оборачиваем контент в NavLink
    return (
        <div className={style.miniinfo}>
            {link ? (
                <NavLink to={link} className={style.miniinfo__link}>
                    {content}
                </NavLink>
            ) : (
                content
            )}
        </div>
    );
};

export default MiniInfo;