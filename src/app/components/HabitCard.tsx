"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import prisma from "../../../lib/prisma";
import { useRouter } from "next/navigation"; // Import router

const HabitCard = (habitCards: any) => {
	const [borderColour, setBorderColour] = useState("border-green");
	const [borderWidth, setBorderWidth] = useState("border-2");
	const [showNotification, setShowNotification] = useState(false);
	// const router = useRouter();

	// console.log(habitCards.habitId);

	// work in progress

	// useEffect(() => {
	// 	const fetchHabitCompletionData = async () => {
	// 		try {
	// 			const response = await fetch(
	// 				`/api/habit-completion-data?habitId=2`,
	// 				{ method: "GET" }
	// 			);
	// 			const { habitLogs } = await response.json();

	// 			if (habitLogs.length < 2) {
	// 				setBorderColour("yellow");
	// 				setShowNotification(true);
	// 			}
	// 		} catch (error) {
	// 			console.error(error);
	// 			// Handle errors gracefully, e.g., display an error message
	// 		}
	// 	};

	// 	fetchHabitCompletionData();
	// }, [habitCards.id, router]); // Include router in dependency array for refetches

	return (
		<div className="relative">
			{showNotification && (
				<span className="absolute top-0 right-0 bg-coral rounded-full py-1 px-2 h-4"></span>
			)}
			<div
				className={`text-center border-solid ${borderWidth} ${borderColour} rounded-xl mt-1`}
			>
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
