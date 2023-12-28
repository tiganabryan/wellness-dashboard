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
				width={500}
				height={500}
				sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
				alt={habitCards.altText}
			/>
			<h5 className="text-dark-maroon">{habitCards.name}</h5>
		</div>
	);
};

export default HabitCard;
