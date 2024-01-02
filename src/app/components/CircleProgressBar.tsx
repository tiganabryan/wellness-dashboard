import React, { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
	useAppDispatch,
	useAppSelector,
	useAppStore,
} from "../../../redux/hooks";

import {
	increment,
	decrement,
	ProgressBarState,
} from "../../../redux/slices/circleProgressBar/circleProgressBarSlice";

const CircleProgressBar = () => {
	const value = useAppSelector((state) => state.progressBarValue.value);
	const checkInCard = useAppSelector((state) => state.toggle);

	useEffect(() => {
		console.log("TEST WORKING");
	}, [checkInCard]);

	return (
		<div className="flex justify-center sm:justify-start">
			<CircularProgressbar
				value={value}
				maxValue={5}
				text={`${value}/4`}
				strokeWidth={15}
				styles={buildStyles({
					textSize: "8px",
					pathColor: "#B55C97",
					textColor: "black",
					trailColor: "#F4D7EA",
				})}
				className="flex justify-start h-36 w-36 sm:h-25 sm:w-25 lg:h-40 lg:w-40"
			/>
		</div>
	);
};

export default CircleProgressBar;
