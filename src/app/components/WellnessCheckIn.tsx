"use client";
import React from "react";
import prisma from "../../../lib/prisma";
import { useState, useEffect } from "react";
// import WellnessCheckInCard from "./WellnessCheckInCard";
import CircleProgressBar from "./CircleProgressBar";

const returnLogs = async () => {
	const logs = await prisma.log.findMany({
		where: { completed: true },
		include: {
			habit: {
				select: { title: true },
			},
		},
	});

	// console.log(logs);

	return logs;
};

// const WellnessCheckInCard = (question: string) => {
// 	return (
// 		<React.Fragment>
// 			<div className="flex justify-center items-center bg-pinky-white drop-shadow-2xl rounded-xl p-5">
// 				<h4 className="" onClick={}>
// 					{question}
// 				</h4>
// 			</div>
// 		</React.Fragment>
// 	);
// };

const WellnessCheckIn = () => {
	const [enoughWater, setEnoughWater] = useState(false);
	const [enoughFood, setEnoughFood] = useState(false);
	const [conversation, setConversation] = useState(false);
	const [stressed, setStress] = useState(false);
	const [enoughSleep, setEnoughSleep] = useState(false);

	const handleInputChange = (
		event: any,
		state: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		state(event.target.value);
	};

	// const logs = await returnLogs();
	// console.log({ logs });
	interface checkInCard {
		name: string;
		question: string;
		option1text: string;
		option2text: string;
		stateValue: boolean;
		stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
	}

	const checkInCards: checkInCard[] = [
		{
			name: "water",
			question: "did you drink enough water today?",
			option1text: "yes",
			option2text: "no",
			stateValue: enoughWater,
			stateSetter: setEnoughWater,
		},
		{
			name: "stress",
			question: "were you stressed today?",
			option1text: "yes",
			option2text: "no",
			stateValue: stressed,
			stateSetter: setStress,
		},
		{
			name: "food",
			question: "did you eat 3 meals today?",
			option1text: "yes",
			option2text: "no",
			stateValue: enoughFood,
			stateSetter: setEnoughFood,
		},
		{
			name: "conversation",
			question: "did you have an uplifting conversation today?",
			option1text: "yes",
			option2text: "no",
			stateValue: conversation,
			stateSetter: setConversation,
		},
	];

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(event);

		// const log = await prisma.log.create({
		// 	data: {

		// 	},
		// });
	};

	return (
		<React.Fragment>
			{/* {logs.map((log) => (
				<div>{log.habit.title}</div>
			))} */}

			<h5 className="text-dark-maroon font-semibold mb-5 text-lg">
				wellness check-in
			</h5>

			<div className="flex mb-10">
				<div className="gap-4 grid sm:grid-cols-2">
					{checkInCards.map((card) => (
						<div
							className={`flex justify-center items-center bg-pinky-white drop-shadow-2xl rounded-xl p-5 border ${
								card.stateValue
									? "border-green border-2"
									: "border-0"
							}`}
							onClick={() => {
								card.stateSetter(!card.stateValue);
								console.log(card.stateValue);
							}}
						>
							<h4>{card.question}</h4>
						</div>
					))}
				</div>

				<CircleProgressBar />
			</div>
		</React.Fragment>
	);
};

export default WellnessCheckIn;
