import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {GameState} from "../types/types.ts";

const initialState: GameState = {
    robots: {
        active: 0,
        maximum: 0,
    },
    energy: {
        current: 0,
        maximum: 0,
    },
    endTime: 0,
    coins: 0,
    resources: {
        spores: 0,
        moss: 0,
        fruits: 0,
    },
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setGameData: (state, action: PayloadAction<GameState>) => {
            return { ...state, ...action.payload };
        },
    },
});

export const { setGameData } = gameSlice.actions;
export default gameSlice.reducer;