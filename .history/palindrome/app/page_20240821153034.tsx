"use client";

import React, { useState, useEffect } from "react";

const PalindromePage: React.FC = () => {
	const [isEightDigit, setIsEightDigit] = useState(true);
	const [dateString, setDateString] = useState({
		firstSet: "",
		secondSet: "",
	});
	const [isPalindrome, setIsPalindrome] = useState(false);
	const [nextPalindrome, setNextPalindrome] = useState("");

	useEffect(() => {
		const today = new Date();
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const day = String(today.getDate()).padStart(2, "0");
		const year = String(today.getFullYear());

		const firstSet = `${month}${day}`;
		const reversedYear = year.split("").reverse().join("");

		setDateString({
			firstSet,
			secondSet: year,
		});

		// Check if today's date is a palindrome
		if (firstSet === reversedYear) {
			setIsPalindrome(true);
		} else {
			setIsPalindrome(false);
			setNextPalindrome(findNextPalindrome(today));
		}
	}, []);

	const toggleFormat = () => {
		setIsEightDigit(!isEightDigit);
	};

	const findNextPalindrome = (date: Date) => {
		let nextDate = new Date(date);

		while (true) {
			nextDate.setDate(nextDate.getDate() + 1);
			const nextMonth = String(nextDate.getMonth() + 1).padStart(2, "0");
			const nextDay = String(nextDate.getDate()).padStart(2, "0");
			const nextYear = String(nextDate.getFullYear());
			const nextFirstSet = `${nextMonth}${nextDay}`;
			const nextReversedYear = nextYear.split("").reverse().join("");

			if (nextFirstSet === nextReversedYear) {
				return `${nextMonth}/${nextDay}/${nextYear}`;
			}
		}
	};

	return (
		<div
			className="relative flex flex-col items-center justify-center min-h-screen"
			style={{
				background:
					"linear-gradient(244deg, #23842D 18.85%, #000 66.81%)",
			}}
		>
			{/* SVG Background */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: "url(/bg-yes.svg)",
					backgroundSize: "cover",
					backgroundPosition: "center",
					zIndex: 1,
					opacity: 0.7, // Optional: adjust opacity if needed
				}}
			></div>

			{/* Text Content */}
			<div className="relative z-10 text-center">
				<h1
					className="text-white font-bold"
					style={{
						fontFamily: '"League Gothic", sans-serif',
						fontSize: "54px",
						fontStyle: "normal",
						lineHeight: "90%",
						margin: "0 20vw 10vh",
					}}
				>
					<span style={{ color: "#1CDC30" }}>Yes!</span> Today is a
					Palindrome
				</h1>
				<div
					className="mb-8 text-white flex justify-center items-center font-bold"
					style={{
						fontFamily: '"League Gothic", sans-serif',
						fontStyle: "normal",
						fontWeight: 900,
						lineHeight: "1", // Tight line-height for single-line display
					}}
				>
					{/* Month-Day with 3D Styling */}
					<span
						style={{
							transform: "perspective(300px) rotateY(45deg)",
							fontSize: "20vw",
							marginRight: "-10vw",
						}}
					>
						{dateString.firstSet}
					</span>
					<span style={{ margin: "0 1vw" }}> </span> {/* Spacer */}
					{/* Year with 3D Styling */}
					<span
						style={{
							transform: "perspective(300px) rotateY(-45deg)",
							fontSize: "20vw",
							marginLeft: "-10vw",
						}}
					>
						{dateString.secondSet}
					</span>
				</div>
				<p className="text-white">
					{isPalindrome
						? "Today is a palindrome!"
						: `The next palindrome date is ${nextPalindrome}`}
				</p>
				<label className="flex items-center space-x-3 text-white">
					<span>7-digit</span>
					<input
						type="checkbox"
						checked={isEightDigit}
						onChange={toggleFormat}
						className="toggle-switch"
					/>
					<span>8-digit</span>
				</label>
			</div>
		</div>
	);
};

export default PalindromePage;
