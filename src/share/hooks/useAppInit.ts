import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tg, userDataUnsafe } from '../telegram/telegram.ts';

export const useAppInit = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const { i18n } = useTranslation();

    useEffect(() => {
        const initApp = async () => {
            // Инициализация Telegram
            tg.setBackgroundColor("#000000");
            tg.setHeaderColor("#000000");

            // Установка языка
            i18n.changeLanguage(userDataUnsafe.language_code);

            // Симуляция загрузки
            await new Promise(resolve => setTimeout(resolve, 3500));
            setIsLoaded(true);
        };

        initApp();
    }, [i18n]);

    return { isLoaded };
};