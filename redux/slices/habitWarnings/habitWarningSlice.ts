import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { counterSlice } from "../circleProgressBar/circleProgressBarSlice";

export interface InputState {
	name: string;
	question: string;
	habitId: number;
	completed: boolean;
	showNotificationBadge: boolean;
	[key: string]: string | number | boolean;
}

const initialState: InputState[] = [
	{
		name: "water",
		question: "did you drink enough water today?",
		habitId: 2,
		completed: false,
		showNotificationBadge: false,
	},
	{
		name: "stress",
		// question: "were you stressed today?",
		question: "were you active today?",
		habitId: 5,
		completed: false,
		showNotificationBadge: false,
	},
	{
		name: "food",
		question: "did you eat enough today?",
		habitId: 3,
		completed: false,
		showNotificationBadge: false,
	},
	{
		name: "conversation",
		question: "did you have an uplifting conversation today?",
		habitId: 7,
		completed: false,
		showNotificationBadge: false,
	},
];

export const inputToggleSlice = createSlice({
	name: "inputToggle",
	initialState,
	reducers: {
		toggleInput: (state, action: PayloadAction<string>) => {
			const cardName = action.payload;

			const foundCard = state.find((card) => card.name === cardName);

			if (foundCard) {
				foundCard.completed = !foundCard.completed;
				// console.log(foundCard.completed);
				console.log(foundCard.completed);
			} else {
				console.warn(`ERROR! unknown card name: ${cardName}`);
			}
		},
	},
});

export const { toggleInput } = inputToggleSlice.actions;

export default inputToggleSlice.reducer;
