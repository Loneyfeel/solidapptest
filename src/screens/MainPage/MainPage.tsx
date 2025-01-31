import React from 'react';
import style from './mainpage.module.sass';
import {tg} from "../../share/telegram/telegram.ts";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {RootState} from "../../store/store.ts";
import BlurContainer from "../../components/BlurContainer";
import LoadingBar from "../../components/LoadingBar";
import MiniInfo from "../../components/MiniInfo";
import {formatNumber} from "../../share/helps/formatNumber.ts";
import {calculatePercentage} from "../../share/helps/calculatePercentage.ts";
import {NavLink} from "react-router-dom";
import ResourcesInfoItem from "../../components/ResourcesInfoItem";

import avatar from '../../assets/MainPage/user-avatar.png'
import robot from '../../assets/MainPage/Info/robot.svg'
import energy from '../../assets/Navbar/market-gray.svg'
import timer from '../../assets/MainPage/Info/timer.svg'
import spore from '../../assets/MainPage/Info/spore.png'
import fruits from '../../assets/MainPage/Info/fruits.png'
import moss from '../../assets/MainPage/Info/moss.png'
import money from '../../assets/MainPage/Info/money.png'


const MainPage: React.FC = () => {
    const {t} = useTranslation();
    const gameData = useSelector((state: RootState) => state.game);

    function handleMainButtonClick(): void {
        console.log('MainButton Click!')
    }

    return (
        <>
            <div className={style.mainpage}>
                <div className={style.mainpage__bgiSky}>
                    <div className={style.mainpage__bgiPlanet}>
                        <div className={style.mainpage__bgiStarship}>
                            <div className={style.mainpage__content}>
                                <div className={style.mainpage__content__info}>
                                    <BlurContainer
                                        paddingY={12}
                                        paddingX={16}
                                        blurAmount={40}
                                        borderRadius={16}
                                        background={'rgba(0, 0, 0, 0.2)'}
                                    >
                                        <div className={style.mainpage__content__info__header}>
                                            <NavLink to="/profile" className={style.mainpage__content__info__header__user}>
                                                <div className={style.mainpage__content__info__header__user__icon}>
                                                    <img src={avatar} alt={''} className={style.mainpage__content__info__header__user__icon_img}/>
                                                </div>
                                                <div className={style.mainpage__content__info__header__user__name}>
                                                    <p className={`text_link ${style.mainpage__content__info__header__user__name_text}`}>
                                                        {tg.initDataUnsafe.user.username}+LongName
                                                    </p>
                                                </div>
                                            </NavLink>
                                            <MiniInfo
                                                icon={robot}
                                                iconSize={32}
                                                title={`${gameData.robots.active} / ${gameData.robots.maximum}`}
                                                text={t("app.pages.main.info.robots")}
                                                link={'/robots'}
                                            />
                                        </div>
                                        <div className={style.mainpage__content__info__resources}>
                                            <ResourcesInfoItem
                                                icon={spore}
                                                text={formatNumber(gameData.resources.spores)}
                                            />
                                            <ResourcesInfoItem
                                                icon={moss}
                                                text={formatNumber(gameData.resources.moss)}
                                            />
                                            <ResourcesInfoItem
                                                icon={fruits}
                                                text={formatNumber(gameData.resources.fruits)}
                                            />
                                            <ResourcesInfoItem
                                                icon={money}
                                                text={formatNumber(gameData.coins)}
                                            />

                                        </div>
                                        <div className={style.mainpage__content__info__footer}>
                                            <MiniInfo
                                                icon={energy}
                                                iconSize={36}
                                                title={`${formatNumber(gameData.energy.current)} / ${formatNumber(gameData.energy.maximum)}`}
                                                text={t("app.pages.main.info.energy")}
                                            />
                                            <MiniInfo
                                                icon={timer}
                                                iconSize={36}
                                                timestamp={gameData.endTime}
                                                text={t("app.pages.main.info.timer")}
                                            />
                                        </div>
                                        <LoadingBar width={calculatePercentage(gameData.energy.current, gameData.energy.maximum)}/>
                                    </BlurContainer>
                                </div>
                                <div className={style.mainpage__content__homeButton}
                                onClick={handleMainButtonClick}>
                                    <p className={`text_link ${style.mainpage__content__homeButton_text}`}>
                                        {t("app.pages.main.mainButton")}
                                    </p>
                                    <div className={style.mainpage__content__homeButton__icon}>
                                        <img src={energy} alt={''}
                                             className={style.mainpage__content__homeButton__icon_img}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;

