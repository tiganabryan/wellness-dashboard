"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const HabitCard = (habitCards: any) => {
	const [borderColour, setBorderColour] = useState("green");

	return (
		<div className="text-center border-solid border-2 border-green rounded-xl">
			<Image
				className="flex"
				src={habitCards.iconPath}
				width={150}
				height={150}
				alt={habitCards.altText}
			/>
			<h5 className="text-dark-maroon">{habitCards.name}</h5>
		</div>
	);
};

export default HabitCard;
