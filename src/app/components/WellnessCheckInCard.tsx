import React from "react";
import CheckInCardInput from "./CheckInCardInput";

const WellnessCheckInCard = (checkInCardData: any) => {
	return (
		<React.Fragment>
			<div className="bg-pinky-white drop-shadow-2xl rounded-xl p-5">
				<h4 className="mb-5">{checkInCardData.question}</h4>

				<div className="border-solid border-2 border-pink-grey mb-3 p-4 rounded-lg flex">
					<label
						htmlFor={checkInCardData.name}
						className="text-dark-maroon grow"
					>
						{checkInCardData.option1text}
					</label>
					<input
						className="radio-input"
						type="radio"
						name={checkInCardData.name}
						id={checkInCardData.name}
					/>
				</div>

				<div className="border-solid border-2 border-pink-grey mb-3 p-4 rounded-lg flex">
					<label
						htmlFor={checkInCardData.name}
						className="text-dark-maroon grow"
					>
						{checkInCardData.option2text}
					</label>
					<input
						className="radio-input"
						type="radio"
						name={checkInCardData.name}
						id={checkInCardData.name}
					/>
				</div>
			</div>
		</React.Fragment>
	);
};

export default WellnessCheckInCard;
