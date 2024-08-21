"use client";

import React, { useState } from "react";

const PalindromePage: React.FC = () => {
	const [isEightDigit, setIsEightDigit] = useState(true);

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
					className="text-white"
					style={{
						fontFamily: '"League Gothic", sans-serif',
						fontSize: "107.171px",
						fontStyle: "normal",
						fontWeight: 400,
						lineHeight: "90%",
					}}
				>
					<span style={{ color: "#1CDC30" }}>Yes!</span> Today is a
					Palindrome
				</h1>
				<p
					className="mb-8 text-white"
					style={{
						fontFamily: '"League Gothic", sans-serif',
						fontSize: "10vw", // Use vw to make it fill the width
						fontStyle: "normal",
						fontWeight: 400,
						lineHeight: "1", // Tight line-height for single-line display
						color: "#FFF",
					}}
				>
					{isEightDigit ? "1 2 0 2 2 0 2 1" : "1 2 0 2 2 1"}
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
