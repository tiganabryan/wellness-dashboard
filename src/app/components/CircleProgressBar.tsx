import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleProgressBar = () => {
	const value = 2;
	return (
		<div className="h-2/3 w-2/3 flex self-center">
			<CircularProgressbar
				value={value}
				maxValue={5}
				text={`${value}/5`}
				strokeWidth={15}
				styles={buildStyles({
					textSize: "8px",
					pathColor: "#B55C97",
					textColor: `black`,
					trailColor: "#F4D7EA",
				})}
			/>
		</div>
	);
};

export default CircleProgressBar;
