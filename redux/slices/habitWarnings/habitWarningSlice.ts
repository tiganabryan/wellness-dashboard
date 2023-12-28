import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState = { value: 0 } as CounterState;

export const mySlice = createSlice({
	name: "mySlice",
	initialState,
	reducers: {
		updateVariable: (state, action: PayloadAction<boolean[]>) => {
			const numberIncompleteHabits = action.payload.filter(
				(value) => !value
			).length;
			state.value = numberIncompleteHabits;
		},
	},
});
