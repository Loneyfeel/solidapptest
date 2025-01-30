import {TelegramWebApps} from "../../types/types.ts";

declare global {
    interface Window {
        Telegram: TelegramWebApps;
    }
}

export const tg = window.Telegram.WebApp;
export const userDataUnsafe = tg.initDataUnsafe.user;
