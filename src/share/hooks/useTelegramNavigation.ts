import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { tg } from '../telegram/telegram.ts';

export const useTelegramNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Массив путей, на которых кнопка "Назад" должна быть скрыта
        const rootPaths = ['/', '/radar', '/market', '/friends', '/tasks'];

        // Проверяем, находимся ли мы на одном из основных путей
        const isRootPath = rootPaths.includes(location.pathname);
        tg.BackButton.isVisible = !isRootPath;

        // Обработчик для кнопки "Назад"
        const handleBackButton = () => {
            navigate(-1);
        };

        // Устанавливаем обработчик
        tg.BackButton.onClick(handleBackButton);

        // Очищаем обработчик при размонтировании
        return () => {
            tg.BackButton.onClick(() => {});
        };
    }, [navigate, location]);
};