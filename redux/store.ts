import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../redux/slices/habitWarnings/habitWarningSlice";

export const makeStore = () => {
	return configureStore({
		reducer: {
			toggle: toggleReducer,
		},
	});
};

// get the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// get the types of RootState and AppDispatch from AppStore (makeStore)
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
