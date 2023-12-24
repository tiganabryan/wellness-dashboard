import React from "react";

const WellnessCheckInCard = (checkInCardData: any) => {
	return (
		<React.Fragment>
			<h4>{checkInCardData.question}</h4>

			<label htmlFor={checkInCardData.name}>
				{checkInCardData.option1text}
			</label>
			<input
				type="radio"
				name={checkInCardData.name}
				id={checkInCardData.name}
			/>

			<label htmlFor={checkInCardData.name}>
				{checkInCardData.option2text}
			</label>
			<input
				type="radio"
				name={checkInCardData.name}
				id={checkInCardData.name}
			/>
		</React.Fragment>
	);
};

export default WellnessCheckInCard;
