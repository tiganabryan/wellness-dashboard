"use client";
import React from "react";
import SystemsOverview from "./SystemsOverview";
import { makeStore, AppStore } from "../../../redux/store";
import { Provider } from "react-redux";
import { useState, useEffect, useRef } from "react";

const SystemsOverviewProvider = () => {
	const storeRef = useRef<AppStore>();
	if (!storeRef.current) {
		storeRef.current = makeStore();
	}
	return (
		<Provider store={storeRef.current}>
			<SystemsOverview />
		</Provider>
	);
};

export default SystemsOverviewProvider;
