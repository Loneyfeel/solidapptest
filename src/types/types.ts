import React from "react";

export interface TelegramWebApps {
    WebApp: {
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        disableVerticalSwipes: () => void;
        initDataUnsafe: {
            user: {
                language_code: string;
                username: string;
            };
        };
        BackButton: {
            onClick: (callback: () => void) => void;
            isVisible: boolean;
        };
    };
}

export interface GameState {
    robots: {
        active: number;
        maximum: number;
    };
    energy: {
        current: number;
        maximum: number;
    };
    endTime: number;
    coins: number;
    resources: {
        spores: number;
        moss: number;
        fruits: number;
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

export interface BlurContainerProps {
    paddingY?: number;
    paddingX?: number;
    blurAmount?: number;
    borderRadius?: number;
    background?: string;
    children: React.ReactNode;
}

export interface MiniInfoProps {
    icon: string;
    iconSize?: number;
    title?: string;
    text: string;
    timestamp?: number;
    link?: string;
}

export interface ResourcesInfoItemProps {
    icon: string;
    text: string | number;
}