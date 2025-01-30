// hooks/useNavigation.ts
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tg } from '../telegram/telegram.ts';
import {
    navigateToPage,
    removeLastKey,
    removeAllKeys,
    elementIsOpen
} from '../store/navigationSlice';
import { RootState } from '../store/store';

export const useNavigation = () => {
    const dispatch = useDispatch();
    const navigationState = useSelector((state: RootState) => state.navigation);

    useEffect(() => {
        // Привязываем обработчик к кнопке "Назад"
        tg.BackButton.onClick(() => {
            dispatch(removeLastKey());
        });

        return () => {
            // Очищаем обработчик при размонтировании
            tg.BackButton.onClick(() => {});
        };
    }, [dispatch]);

    return {
        navigateToPage: (path: string) => dispatch(navigateToPage(path)),
        removeAllKeys: () => dispatch(removeAllKeys()),
        isOpen: (path: string) => elementIsOpen({ navigation: navigationState }, path)
    };
};