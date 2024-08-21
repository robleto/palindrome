"use client";

import React, { useState } from "react";

const PalindromePage: React.FC = () => {
	const [isEightDigit, setIsEightDigit] = useState(true);

	const toggleFormat = () => {
		setIsEightDigit(!isEightDigit);
	};

	// Split the 8-digit palindrome into two sets of 4 digits
	const firstSet = isEightDigit ? "1 2 0 2" : "1 2 0";
	const secondSet = isEightDigit ? "2 0 2 1" : "2 2 1";

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
					className="mb-8 text-white flex justify-center font-bold"
					style={{
						fontFamily: '"League Gothic", sans-serif',
						fontSize: "12vw", // Use vw to make it fill the width
						fontStyle: "normal",
						fontWeight: 900,
						lineHeight: "1", // Tight line-height for single-line display
					}}
				>
					<span>{firstSet}</span>
					<span style={{ margin: "0 1vw" }}> </span>{" "}
					{/* Spacer between the two sets */}
					<span>{secondSet}</span>
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
