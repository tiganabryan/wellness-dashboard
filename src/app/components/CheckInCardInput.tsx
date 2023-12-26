import React from "react";

const CheckInCardInput = (checkInCardData: any) => {
	return (
		<React.Fragment>
			<div className="border-solid border-2 border-pink-grey rounded-lg">
				<label htmlFor={checkInCardData.name}>
					{checkInCardData.option1text}
				</label>
				<input
					type="radio"
					name={checkInCardData.name}
					id={checkInCardData.name}
				/>
			</div>
		</React.Fragment>
	);
};

export default CheckInCardInput;
