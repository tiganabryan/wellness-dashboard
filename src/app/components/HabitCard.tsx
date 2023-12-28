"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const HabitCard = (iconPath: string) => {
	const [borderColour, setBorderColour] = useState("green");

	return (
		<div className="border-solid border-2 border-green">
			<Image
				src="/bottleIcon.svg"
				width={500}
				height={500}
				alt="Picture of the author"
			/>
		</div>
	);
};

export default HabitCard;
