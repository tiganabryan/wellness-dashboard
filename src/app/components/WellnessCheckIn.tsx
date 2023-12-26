import React from "react";
import WellnessCheckInCard from "./WellnessCheckInCard";

const WellnessCheckIn = () => {
	interface checkInCard {
		name: string;
		question: string;
		option1text: string;
		option2text: string;
	}

	const checkInCards: checkInCard[] = [
		{
			name: "water",
			question: "did you drink enough water today?",
			option1text: "yes",
			option2text: "no",
		},
		{
			name: "stress",
			question: "how stressed were you today?",
			option1text: "just a little",
			option2text: "very stressed",
		},
		{
			name: "meals",
			question: "did you eat 3 meals today?",
			option1text: "yes",
			option2text: "no",
		},
		{
			name: "conversation",
			question: "did you have an uplifting conversation today?",
			option1text: "yes",
			option2text: "no",
		},
	];

	return (
		<React.Fragment>
			<div>
				{checkInCards.map((checkInCard, index) => (
					<WellnessCheckInCard
						key={index}
						name={checkInCard.name}
						question={checkInCard.question}
						option1text={checkInCard.option1text}
						option2text={checkInCard.option2text}
					/>
				))}
			</div>
		</React.Fragment>
	);
};

export default WellnessCheckIn;
