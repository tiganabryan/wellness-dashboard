"use client";
import React from "react";
import prisma from "../../../prisma-client/prisma";
import { useEffect, useRef } from "react";
import CircleProgressBar from "./CircleProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { inputToggleSlice } from "../../../redux/slices/habitWarnings/habitWarningSlice";
import WellnessCheckInCard from "./WellnessCheckInCard";
import { makeStore, AppStore } from "../../../redux/store";
import {
	useAppDispatch,
	useAppSelector,
	useAppStore,
} from "../../../redux/hooks";
import { InputState } from "../../../redux/slices/habitWarnings/habitWarningSlice";
import { toggleInput } from "../../../redux/slices/habitWarnings/habitWarningSlice";
import { setValue } from "../../../redux/slices/circleProgressBar/circleProgressBarSlice";

const WellnessCheckIn = () => {
	const store = useAppStore();

	const checkInCards = useAppSelector((state) => state.toggle);
	const dispatch = useAppDispatch();

	const numHabitsCompleted = useAppSelector((state) =>
		state.toggle.filter((card) => card.completed)
	).length;

	console.log(numHabitsCompleted);

	dispatch(setValue(numHabitsCompleted));

	// const submitLog = async (checkInCards: checkInCard[]) => {
	// 	try {
	// 		for (const card of checkInCards) {
	// 			await fetch("/api/submit-log", {
	// 				method: "POST",
	// 				headers: { "Content-Type": "application/json" },
	// 				body: JSON.stringify({
	// 					habitId: card.habitId,
	// 					completed: card.stateValue,
	// 				}),
	// 			});

	// 			card.stateSetter(false);
	// 		}
	// 	} catch (error) {
	// 		console.log("error:" + error);
	// 	}
	// };

	// const habitNames  = ['water', "stress", ]

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
					{checkInCards.map((card: InputState, index: number) => (
						// <WellnessCheckInCard key={index} card={card} />
						<div
							className={`flex justify-center items-center bg-pinky-white drop-shadow-2xl rounded-xl p-5 border ${
								card.completed
									? "border-green border-2"
									: "border-0"
							}`}
							onClick={() => {
								dispatch(toggleInput(card.name));
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

					<button className="flex bg-magenta text-white rounded-lg py-2 mt-4 w-fit px-6 self-center justify-end">
						submit
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default WellnessCheckIn;
