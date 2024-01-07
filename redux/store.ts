import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../redux/slices/habitWarnings/habitWarningSlice";
import progressBarReducer from "../redux/slices/circleProgressBar/circleProgressBarSlice";
import { graphqlApi } from "./queries/graphqlQuery";

export const makeStore = () => {
	return configureStore({
		reducer: {
			toggle: toggleReducer,
			progressBarValue: progressBarReducer,
			[graphqlApi.reducerPath]: graphqlApi.reducer,
		},
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(graphqlApi.middleware),
	});
};

// get the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// get the types of RootState and AppDispatch from AppStore (makeStore)
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
