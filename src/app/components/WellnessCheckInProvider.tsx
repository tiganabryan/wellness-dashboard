"use client";
import React from "react";
import WellnessCheckIn from "./WellnessCheckIn";
import { makeStore, AppStore } from "../../../redux/store";
import { Provider } from "react-redux";
import { useState, useEffect, useRef } from "react";

const WellnessCheckInProvider = () => {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		// Create the store instance the first time this renders
		storeRef.current = makeStore();
	}
	return (
		<Provider store={storeRef.current}>
			<WellnessCheckIn />
		</Provider>
	);
};

export default WellnessCheckInProvider;
