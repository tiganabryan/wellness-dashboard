import React from "react";
import HabitCard from "./HabitCard";
import prisma from "../../../lib/prisma";
import { GetStaticProps } from "next";

const SystemsOverview = () => {
	interface habitCard {
		name: string;
		iconPath: string;
		altText: string;
		habitId: number;
	}

	const habitCards: habitCard[] = [
		{
			name: "water",
			iconPath: "/bottleIcon.svg",
			altText: "3d icon of bottle",
			habitId: 2,
		},
		{
			name: "stress",
			iconPath: "/stormIcon.svg",
			altText: "3d icon of clouds with lightning",
			habitId: 5,
		},
		{
			name: "connection",
			iconPath: "/heartIcon.svg",
			altText: "3d icon of red heart",
			habitId: 7,
		},
		{
			name: "food",
			iconPath: "/carrotIcon.svg",
			altText: "3d icon of one raw carrot",
			habitId: 3,
		},
	];
	return (
		<React.Fragment>
			<h5 className="text-dark-maroon font-semibold text-lg mb-5 text-center sm:text-start">
				systems functioning • 2 warnings
			</h5>
			<div className="gap-4 grid grid-cols-2 sm:grid-cols-4 max-w-4xl">
				{habitCards.map((card, index) => (
					<HabitCard
						key={index}
						name={card.name}
						iconPath={card.iconPath}
						altText={card.altText}
						habitId={card.habitId}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default SystemsOverview;
