"use client";
import React from "react";
import prisma from "../../../lib/prisma";
import { useState, useEffect } from "react";
import CircleProgressBar from "./CircleProgressBar";

interface checkInCard {
	name: string;
	question: string;
	habitId: number;
	stateValue: boolean;
	stateSetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const WellnessCheckIn = () => {
	const [enoughWater, setEnoughWater] = useState(false);
	const [enoughFood, setEnoughFood] = useState(false);
	const [conversation, setConversation] = useState(false);
	const [stressed, setStress] = useState(false);
	const [enoughSleep, setEnoughSleep] = useState(false);

	const checkInCards: checkInCard[] = [
		{
			name: "water",
			question: "did you drink enough water today?",
			habitId: 2,
			stateValue: enoughWater,
			stateSetter: setEnoughWater,
		},
		{
			name: "stress",
			question: "were you stressed today?",
			habitId: 5,
			stateValue: stressed,
			stateSetter: setStress,
		},
		{
			name: "food",
			question: "did you eat enough today?",
			habitId: 3,
			stateValue: enoughFood,
			stateSetter: setEnoughFood,
		},
		{
			name: "conversation",
			question: "did you have an uplifting conversation today?",
			habitId: 7,
			stateValue: conversation,
			stateSetter: setConversation,
		},
	];

	const submitLog = async (checkInCards: checkInCard[]) => {
		try {
			for (const card of checkInCards) {
				await fetch("/api/submit-log", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						habitId: card.habitId,
						completed: card.stateValue,
					}),
				});

				card.stateSetter(false);
			}
		} catch (error) {
			console.log("error:" + error);
		}
	};

	return (
		<React.Fragment>
			<h5 className="text-dark-maroon font-semibold mb-5 text-xl">
				wellness check-in
			</h5>

			<div className="flex mb-10">
				<div className="gap-6 grid sm:grid-cols-2">
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
				<div className="flex flex-col justify-between lg:flex-row">
					<CircleProgressBar />
					<button
						onClick={() => submitLog(checkInCards)}
						className="flex bg-magenta text-white rounded-lg py-2 mt-4 w-fit px-6 self-center justify-end"
					>
						submit
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default WellnessCheckIn;
