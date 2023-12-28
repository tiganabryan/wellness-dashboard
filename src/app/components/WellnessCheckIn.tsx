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
			<form action="" method="post">
				<div className="gap-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4">
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

				<div className="flex justify-end">
					<button
						type="submit"
						className="bg-magenta text-white rounded-lg py-2 px-6 mt-4"
					>
						submit
					</button>
				</div>
			</form>
		</React.Fragment>
	);
};

export default WellnessCheckIn;
