import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface inputState {
	water: boolean;
	stress: boolean;
	food: boolean;
	conversation: boolean;
	[key: string]: boolean;
}

const initialState = {
	water: false,
	stress: false,
	food: false,
	conversation: false,
} as inputState;

export const inputToggleSlice = createSlice({
	name: "inputToggle",
	initialState,
	reducers: {
		updateVariable: (state, action: PayloadAction<string>) => {
			const cardName = action.payload;

			(state as inputState)[cardName] = !(state as inputState)[cardName];

			if (!(cardName in state)) {
				console.warn(`Unknown card name: ${cardName}`);
			}
		},
	},
});
