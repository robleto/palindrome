"use client";

import React, { useState, useEffect } from "react";

// Utility functions
const check8DigitPalindrome = (date: Date) => {
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const year = String(date.getFullYear());

	const firstSet = `${month}${day}`;
	const reversedYear = year.split("").reverse().join("");

	return {
		isPalindrome: firstSet === reversedYear,
		dateString: { firstSet, secondSet: year },
	};
};

// Future function for 7-digit palindrome
const check7DigitPalindrome = (date: Date) => {
	const month = String(date.getMonth() + 1);
	const day = String(date.getDate()).padStart(2, "0");
	const year = String(date.getFullYear());

	const firstSet = `${month}${day}`; // Adjust as needed for 7-digit
	const reversedYear = year.slice(1).split("").reverse().join(""); // Last 3 digits

	return {
		isPalindrome: firstSet === reversedYear,
		dateString: { firstSet, secondSet: year },
	};
};

// Configurations
const config = {
	"8-digit": {
		bgImage: "/bg-yes.svg",
		gradient: "linear-gradient(244deg, #23842D 18.85%, #000 66.81%)",
		text: {
			palindrome: "Yes! Today is a Palindrome",
			notPalindrome: "Today is NOT a palindrome",
		},
	},
	"7-digit": {
		bgImage: "/bg-no.svg", // Placeholder, will be adjusted
		gradient: "linear-gradient(244deg, #842323 18.85%, #000 66.81%)",
		text: {
			palindrome: "Yes! Today is a 7-Digit Palindrome",
			notPalindrome: "Today is NOT a 7-Digit palindrome",
		},
	},
};

const PalindromePage: React.FC = () => {
	const [isEightDigit, setIsEightDigit] = useState(true);
	const [isPalindrome, setIsPalindrome] = useState(false);
	const [dateString, setDateString] = useState({
		firstSet: "",
		secondSet: "",
	});

	useEffect(() => {
		const today = new Date();
		let result;
		if (isEightDigit) {
			result = check8DigitPalindrome(today);
		} else {
			result = check7DigitPalindrome(today);
		}

		setIsPalindrome(result.isPalindrome);
		setDateString(result.dateString);
	}, [isEightDigit]);

	const toggleFormat = () => {
		setIsEightDigit(!isEightDigit);
	};

	const currentConfig = isEightDigit ? config["8-digit"] : config["7-digit"];

	return (
		<div
			className="relative flex flex-col items-center justify-center min-h-screen"
			style={{
				background: isPalindrome
					? currentConfig.gradient
					: "linear-gradient(244deg, #842323 18.85%, #000 66.81%)",
			}}
		>
			{/* SVG Background */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: isPalindrome
						? currentConfig.bgImage
						: "/bg-no.svg",
					backgroundSize: "cover",
					backgroundPosition: "center",
					zIndex: 1,
					opacity: 0.7,
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
							<span style={{ color: "#1CDC30" }}>Yes!</span>{" "}
							{currentConfig.text.palindrome}
						</>
					) : (
						<>
							<span>Today is </span>
							<span style={{ color: "#D40606" }}>NOT</span>
							<span> {currentConfig.text.notPalindrome}</span>
						</>
					)}
				</h1>
				<div
					className="mb-8 text-white flex justify-center items-center font-bold"
					style={{
						fontFamily: '"League Gothic", sans-serif',
						fontStyle: "normal",
						fontWeight: 900,
						lineHeight: "1",
					}}
				>
					<span
						style={{
							transform: "perspective(300px) rotateY(45deg)",
							fontSize: "20vw",
							marginRight: "-10vw",
						}}
					>
						{dateString.firstSet}
					</span>
					<span style={{ margin: "0 1vw" }}> </span>
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
