import React, {useEffect, useState} from 'react';
import style from './preloader.module.sass';
import {useTranslation} from "react-i18next";
import LoadingBar from "../../components/LoadingBar";

const Preloader: React.FC = () => {
    const {t} = useTranslation();
    const [progress, setProgress] = useState<number>(0);
    const randomNumber:number = Math.floor(Math.random() * 2) + 1 //для рандомизации подсказок

    useEffect(() => {
            setProgress(100)
    }, []);

    return (
        <>
            <div className={style.preloader}>
                <div className={style.preloader__content}>
                    <div className={style.preloader__content__title}>
                        <p className={`text_center ${style.preloader__content__title_text}`}>
                            {t("preloader.title")}
                        </p>
                    </div>
                    <div className={style.preloader__content__loading}>
                        <div className={style.preloader__content__loading__title}>
                            <p className={`text_center ${style.preloader__content__loading__title_text}`}>
                                {t("preloader.loading.title")}
                            </p>
                        </div>
                       <LoadingBar width={progress}/>
                        <div className={`blur_40 ${style.preloader__content__loading__info}`}>
                            <p className={`text_center text_opacity_50 ${style.preloader__content__loading__info_text}`}>
                                {t(`preloader.loading.info_${randomNumber}`)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;

