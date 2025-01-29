interface TelegramWebApps {
    WebApp: {
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        initDataUnsafe: {
            user: {
                language_code: string
            }
        }
    }
}

declare global {
    interface Window {
        Telegram: TelegramWebApps;
    }
}

export const tg = window.Telegram.WebApp;
export const userDataUnsafe = tg.initDataUnsafe.user;