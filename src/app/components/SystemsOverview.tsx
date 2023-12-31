import React from "react";
import HabitCard from "./HabitCard";
import prisma from "../../../lib/prisma";
import { GetStaticProps } from "next";

const SystemsOverview = () => {
	interface habitCard {
		name: string;
		iconPath: string;
		altText: string;
	}

	const habitCards: habitCard[] = [
		{
			name: "water",
			iconPath: "/bottleIcon.svg",
			altText: "3d icon of bottle",
		},
		{
			name: "stress",
			iconPath: "/stormIcon.svg",
			altText: "3d icon of clouds with lightning",
		},
		{
			name: "connection",
			iconPath: "/heartIcon.svg",
			altText: "3d icon of red heart",
		},
		{
			name: "food",
			iconPath: "/carrotIcon.svg",
			altText: "3d icon of one raw carrot",
		},
	];
	return (
		<React.Fragment>
			<h5 className="text-dark-maroon font-semibold text-lg mb-5">
				systems functioning • 2 warnings
			</h5>
			<div className="gap-4 grid grid-cols-2 sm:grid-cols-4 max-w-4xl">
				{habitCards.map((card, index) => (
					<HabitCard
						key={index}
						name={card.name}
						iconPath={card.iconPath}
						altText={card.altText}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default SystemsOverview;
