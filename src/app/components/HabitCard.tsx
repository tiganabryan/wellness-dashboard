"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const HabitCard = (habitCards: any) => {
	const [borderColour, setBorderColour] = useState("green");

	return (
		<div className="relative">
			<span className="absolute top-0 right-0 bg-coral rounded-full py-1 px-2 h-4"></span>
			<div className="text-center border-solid border-2 border-green rounded-xl mt-1">
				<Image
					className="flex"
					src={habitCards.iconPath}
					width={500}
					height={500}
					sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
					alt={habitCards.altText}
				/>
				<h5 className="text-dark-maroon mb-4">{habitCards.name}</h5>
			</div>
		</div>
	);
};

export default HabitCard;
