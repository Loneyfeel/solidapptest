export interface TelegramWebApps {
    WebApp: {
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        initDataUnsafe: {
            user: {
                language_code: string;
            };
        };
        BackButton: {
            onClick: (callback: () => void) => void;
            isVisible: boolean;
        };
    };
}

export interface LoadingBarProps {
    width: number;
}

export interface IconPaths {
    colored: string;
    gray: string;
}

export interface NavItem {
    to: string;
    icons: IconPaths;
    label: string;
    isHome?: boolean;
}

export interface NavItems {
    [key: string]: NavItem;
}