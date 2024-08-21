"use client";

import React, { useState, useEffect } from "react";

const PalindromePage: React.FC = () => {
	const [isEightDigit, setIsEightDigit] = useState(true);
	const [dateString, setDateString] = useState({
		firstSet: "",
		secondSet: "",
	});

	useEffect(() => {
		const today = new Date();
		const month = String(today.getMonth() + 1).padStart(2, "0");
		const day = String(today.getDate()).padStart(2, "0");
		const year = String(today.getFullYear());

		setDateString({
			firstSet: `${month}${day}`, // No space between month and day
			secondSet: year,
		});
	}, []);

	const toggleFormat = () => {
		setIsEightDigit(!isEightDigit);
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
						margin: "0 20%",
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
              marginRight: 
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
						}}
					>
						{dateString.secondSet}
					</span>
				</div>
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
