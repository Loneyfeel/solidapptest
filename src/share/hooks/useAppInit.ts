import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { tg, userDataUnsafe } from '../telegram/telegram.ts';
import {setGameData} from "../../store/gameSlice.ts";

export const useAppInit = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { i18n } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        const initApp = async () => {
            // Инициализация Telegram
            tg.setBackgroundColor("#000000");
            tg.setHeaderColor("#000000");
            tg.disableVerticalSwipes()

            // Установка языка
            i18n.changeLanguage(userDataUnsafe.language_code);

            // Инициализация данных игры
            const currentTime = new Date();
            const endTime = currentTime.getTime() + (36 * 60 + 25) * 60 * 1000; // 36 часов и 25 минут в миллисекундах

            dispatch(setGameData({
                robots: {
                    active: 1,
                    maximum: 3,
                },
                energy: {
                    current: 1100,
                    maximum: 3500,
                },
                endTime,
                coins: 2200000,
                resources: {
                    spores: 4200,
                    moss: 6700,
                    fruits: 5100,
                },
            }));

            // Симуляция загрузки
            await new Promise(resolve => setTimeout(resolve, 3500));
            setIsLoaded(true);
        };

        initApp();
    }, [i18n, dispatch]);

    return { isLoaded };
};