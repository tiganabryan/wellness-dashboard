import React from "react";
import CheckInCardInput from "./CheckInCardInput";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { inputToggleSlice } from "../../../redux/slices/habitWarnings/habitWarningSlice";
import { toggleInput } from "../../../redux/slices/habitWarnings/habitWarningSlice";
import { InputState } from "../../../redux/slices/habitWarnings/habitWarningSlice";
import { ProgressBarState } from "../../../redux/slices/circleProgressBar/circleProgressBarSlice";
import { setValue } from "../../../redux/slices/circleProgressBar/circleProgressBarSlice";

import {
	useAppDispatch,
	useAppSelector,
	useAppStore,
} from "../../../redux/hooks";

const WellnessCheckInCard = (card: any, key: number) => {
	// const cardState = useSelector((state: RootState) => state.inputToggleSlice); // Change selector as needed
	const dispatch = useAppDispatch();

	return (
		<React.Fragment>
			<div
				className={`flex justify-center items-center bg-pinky-white drop-shadow-2xl rounded-xl p-5 border ${
					card.completed ? "border-green border-2" : "border-0"
				}`}
				onClick={() => {
					// dispatch(toggleInput(card.name));
					dispatch(toggleInput("water"));
					// WHERE I WAS: DISPATCHING CORRECT VALUE. THE CLICK IS SUPPOSED TO TRIGGER THE TOGGLE IN THE CORRESPONDING INPUT (MULTIPLE INPUTS, WE'RE MAPPING OVER THEM TO RENDER THE CARDS)
					// console.log(card.stateValue);
					// const completedCount = useAppSelector(
					// 	(state) =>
					// 		state.toggle.filter((card) => card.completed).length
					// );

					// dispatch(setValue(completedCount));
				}}
				key={key}
			>
				<h4>{card.question}</h4>
			</div>
		</React.Fragment>
	);
};

export default WellnessCheckInCard;
