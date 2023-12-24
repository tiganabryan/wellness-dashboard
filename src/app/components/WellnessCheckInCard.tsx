import React from "react";

const WellnessCheckInCard = (checkInCardData: any) => {
	return (
		<React.Fragment>
			<h4>{checkInCardData.question}</h4>

			<label htmlFor="option1">{checkInCardData.option1text}</label>
			<input type="radio" name="option1" id="option1" />

			<label htmlFor="option1">{checkInCardData.option2text}</label>
			<input type="radio" name="option2" id="option2" />
		</React.Fragment>
	);
};

export default WellnessCheckInCard;
