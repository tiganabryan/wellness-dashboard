import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProgressBarState {
	value: number;
	showConfetti: boolean;
}

const initialState: ProgressBarState = {
	value: 0,
	showConfetti: false,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		setValue: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
		// showConfetti: (state) => {
		// 	state.showConfetti = true;
		// },
	},
});

export const {
	increment,
	decrement,
	setValue,
	// showConfetti
} = counterSlice.actions;

export default counterSlice.reducer;
