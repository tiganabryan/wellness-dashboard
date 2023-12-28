"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const HabitCard = (habitCards: any) => {
	const [borderColour, setBorderColour] = useState("green");

	return (
		<div className="border-solid border-2 border-green">
			<Image
				className="flex"
				src={habitCards.iconPath}
				width={100}
				height={100}
				alt={habitCards.altText}
			/>
		</div>
	);
};

export default HabitCard;
