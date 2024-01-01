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
			<h5 className="text-dark-maroon font-normal sm:font-medium mb-5 text-2xl text-center sm:text-start">
				wellness check-in
			</h5>

			<div className="mobile-progress-bar mb-6">
				<CircleProgressBar />
			</div>

			<div className="flex flex-col lg:flex-row mb-10 max-w-3xl">
				<div className="gap-5 sm:gap-6 grid grid-cols-2 sm:grid-cols-2 mb-3 lg:mb-0">
					{checkInCards.map((card, index) => (
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
							key={index}
						>
							<h4>{card.question}</h4>
						</div>
					))}
				</div>
				<div className="flex justify-center sm:justify-start lg:ml-8 lg:flex-col lg:items-center">
					<div className="flex desktop-progress-bar">
						<CircleProgressBar />
					</div>

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
