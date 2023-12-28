import React from "react";
import HabitCard from "./HabitCard";

const SystemsOverview = () => {
	interface habitCard {
		name: string;
		iconPath: string;
	}

	const habitCards: habitCard[] = [
		{
			name: "water",
			iconPath: "/bottleIcon.svg",
		},
		{
			name: "stress",
			iconPath: "/stormIcon.svg",
		},
		{
			name: "meals",
			iconPath: "carrotIcon.svg",
		},
		{
			name: "conversation",
			iconPath: "heartIcon.svg",
		},
	];
	return <React.Fragment>{}</React.Fragment>;
};

export default SystemsOverview;
