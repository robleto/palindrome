"use client";

import React, { useState, useEffect } from "react";

const PalindromePage: React.FC = () => {
	const [isEightDigit, setIsEightDigit] = useState(true);
	const [dateString, setDateString] = useState({
		firstSet: "",
		secondSet: "",
	});
	const [isPalindrome, setIsPalindrome] = useState(false);

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

		// Check if today's date is a palindrome using the 8-digit treatment
		if (firstSet === reversedYear) {
			setIsPalindrome(true);
		} else {
			setIsPalindrome(false);
		}
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
						margin: "0 20vw 10vh",
					}}
				>
					{isPalindrome ? (
						<>
							<span style={{ color: "#1CDC30" }}>Yes!</span> Today
							is a Palindrome
						</>
					) : (
						<>
							<span>Today is </span>
							<span style={{ color: "#D40606" }}>NOT</span>
							<span> a palindrome</span>
						</>
					)}
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
			</div>

			{/* Centered Toggle Label */}
			<div
				className="absolute flex items-center"
				style={{
					bottom: "5%",
					left: "50%",
					transform: "translateX(-50%)",
					fontFamily: '"League Gothic", sans-serif',
					color: "#FFFFFF",
					fontSize: "1.5rem",
					fontWeight: 400,
					zIndex: 10,
				}}
			>
				<span style={{ marginRight: "0.5rem" }}>7-digit</span>
				<label
					style={{
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
					}}
				>
					<input
						type="checkbox"
						checked={isEightDigit}
						onChange={toggleFormat}
						style={{
							width: "2rem",
							height: "1rem",
							appearance: "none",
							backgroundColor: "#555",
							borderRadius: "1rem",
							position: "relative",
							outline: "none",
							transition: "background-color 0.2s",
						}}
					/>
					<span
						style={{
							position: "absolute",
							width: "1rem",
							height: "1rem",
							backgroundColor: "#fff",
							borderRadius: "50%",
							transform: isEightDigit
								? "translateX(1rem)"
								: "translateX(0)",
							transition: "transform 0.2s",
							boxShadow: "0 0 2px rgba(0,0,0,0.5)",
						}}
					></span>
				</label>
				<span style={{ marginLeft: "0.5rem" }}>8-digit</span>
			</div>
		</div>
	);
};

export default PalindromePage;
