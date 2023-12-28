import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
	return configureStore({
		reducer: {},
	});
};

// get the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// get the types of RootState and AppDispatch from AppStore (makeStore)
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
