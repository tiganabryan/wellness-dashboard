import React from "react";

const WellnessCheckIn = () => {
	interface checkInCard {
		question: string;
		option1text: string;
		option2text: string;
	}

	const checkInCard: checkInCard[] = [
		{
			question: "did you drink enough water today?",
			option1text: "yes",
			option2text: "no",
		},
		{
			question: "how stressed were you today?",
			option1text: "just a little",
			option2text: "very stressed",
		},
		{
			question: "did you eat 3 meals today?",
			option1text: "yes",
			option2text: "no",
		},
		{
			question: "did you have an uplifting conversation today?",
			option1text: "yes",
			option2text: "no",
		},
	];

	return <React.Fragment></React.Fragment>;
};

export default WellnessCheckIn;
