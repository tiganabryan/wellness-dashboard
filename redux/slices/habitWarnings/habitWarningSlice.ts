import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface InputState {
	name: string;
	question: string;
	habitId: number;
	completed: boolean;
	[key: string]: string | number | boolean;
}

const initialState: InputState[] = [
	{
		name: "water",
		question: "did you drink enough water today?",
		habitId: 2,
		completed: false,
	},
	{
		name: "stress",
		question: "were you stressed today?",
		habitId: 5,
		completed: false,
	},
	{
		name: "food",
		question: "did you eat enough today?",
		habitId: 3,
		completed: false,
	},
	{
		name: "conversation",
		question: "did you have an uplifting conversation today?",
		habitId: 7,
		completed: false,
	},
];

// const initialState = {
// 	water: false,
// 	stress: false,
// 	food: false,
// 	conversation: false,
// } as InputState;

export const inputToggleSlice = createSlice({
	name: "inputToggle",
	initialState,
	reducers: {
		toggleInput: (state, action: PayloadAction<string>) => {
			const cardName = action.payload;
			const foundCard = state.find((card) => card.name === cardName);

			if (foundCard) {
				foundCard.completed = !foundCard.completed;
			} else {
				console.warn(`unknown card name: ${cardName}`);
			}
		},
	},
});

export const { toggleInput } = inputToggleSlice.actions;

export default inputToggleSlice.reducer;
