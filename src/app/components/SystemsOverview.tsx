import React from "react";
import HabitCard from "./HabitCard";

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
			<div className="flex">
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
