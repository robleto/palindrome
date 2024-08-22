"use client";

import React, { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation"; // Commented out for testing with query strings
import { formatDate, isPalindrome } from "../utils/dateUtils";
import { palindromeConfig } from "../config/palindromeConfig";

const PalindromePage: React.FC = () => {
	const [isEightDigit, setIsEightDigit] = useState(true);
	const [showToggle, setShowToggle] = useState(true);
	const [palindromeResult, setPalindromeResult] = useState({
		isPalindrome: false,
		firstPart: "",
		fullYear: "",
		middleDigit: "",
		lastThreeDigits: "",
	});

	// You might want to useEffect for any logic that happens after the page loads
	useEffect(() => {
		// const searchParams = useSearchParams(); // Commented out for testing with query strings

		let today = new Date();

		// Example for testing with query strings:
		// const dateParam = searchParams.get("date");
		// if (dateParam) {
		// 	if (dateParam.length === 8) {
		// 		const month = parseInt(dateParam.slice(0, 2)) - 1;
		// 		const day = parseInt(dateParam.slice(2, 4));
		// 		const year = parseInt(dateParam.slice(4));
		// 		today = new Date(year, month, day);
		// 	} else if (dateParam.length === 7) {
		// 		const month = parseInt(dateParam.slice(0, 1)) - 1;
		// 		const day = parseInt(dateParam.slice(1, 3));
		// 		const year = parseInt(dateParam.slice(3));
		// 		today = new Date(year, month, day);
		// 	}
		// }

		const currentMonth = today.getMonth();
		setShowToggle(currentMonth < 9);

		const { firstPart, secondPart } = formatDate(today, isEightDigit);

		const middleDigit = secondPart[0];
		const lastThreeDigits = secondPart.slice(1);

		// const forceYes = searchParams.get("yes") !== null;
		// const forceNo = searchParams.get("no") !== null;

		const result = isEightDigit
			? isPalindrome(firstPart, secondPart)
			: isPalindrome(firstPart.slice(0, 3), lastThreeDigits);

		setPalindromeResult({
			isPalindrome: result,
			firstPart,
			fullYear: secondPart,
			middleDigit,
			lastThreeDigits,
		});
	}, [isEightDigit]);

	const toggleFormat = () => setIsEightDigit(!isEightDigit);

	const config = isEightDigit
		? palindromeConfig.eightDigit
		: palindromeConfig.sevenDigit;

	return (
		<div
			className={`palindrome-container`}
			style={{
				background: palindromeResult.isPalindrome
					? "linear-gradient(244deg, #23842D 18.85%, #000 66.81%)"
					: "linear-gradient(244deg, #842323 18.85%, #000 66.81%)",
			}}
		>
			{/* SVG Background */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `url(${
						palindromeResult.isPalindrome
							? config.bgImage.palindrome
							: config.bgImage.notPalindrome
					})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					zIndex: 1,
					opacity: 0.7,
				}}
			></div>

			{/* Text Content */}
			<div className="relative z-10 text-center">
				<h1 className="palindrome-heading">
					{palindromeResult.isPalindrome ? (
						<span>
							<span style={{ color: "#1CDC30" }}>Yes!</span> Today
							is a Palindrome
						</span>
					) : (
						<span>
							Today is{" "}
							<span style={{ fontWeight: 900, color: "#D40606" }}>
								NOT
							</span>{" "}
							a palindrome
						</span>
					)}
				</h1>
				<div className="palindrome-content">
					{isEightDigit ? (
						<>
							<span
								className="palindrome-first-part"
								style={{
									fontSize: "28vw",
									marginRight: "-12vw",
									paddingLeft: "10vw",
									transform:
										"perspective(300px) rotateY(45deg)",
								}}
							>
								{palindromeResult.firstPart}
							</span>
							<span style={{ margin: "0 1vw" }}> </span>
							<span
								className="palindrome-second-part"
								style={{
									fontSize: "28vw",
									marginLeft: "-12vw",
									paddingRight: "10vw",
									transform:
										"perspective(300px) rotateY(-45deg)",
								}}
							>
								{palindromeResult.fullYear}
							</span>
						</>
					) : (
						<>
							{/* 7-digit format: Apply transforms only to the first 3 and last 3 digits */}
							<span
								className="palindrome-first-part"
								style={{
									fontSize: "28vw",
									marginRight: "-12vw",
									paddingLeft: "10vw",
									transform:
										"perspective(300px) rotateY(45deg)",
								}}
							>
								{palindromeResult.firstPart.slice(0, 3)}
							</span>
							<span
								style={{
									fontSize: "18vw", // Reduced font size for middle digit
									margin: "0 1vw",
								}}
							>
								{palindromeResult.middleDigit}
							</span>
							<span
								className="palindrome-second-part"
								style={{
									fontSize: "28vw",
									marginLeft: "-12vw",
									paddingRight: "10vw",
									transform:
										"perspective(300px) rotateY(-45deg)",
								}}
							>
								{palindromeResult.lastThreeDigits}
							</span>
						</>
					)}
				</div>
			</div>

			{/* Centered Toggle Label */}
			{showToggle && (
				<div className="palindrome-toggle">
					<span style={{ marginRight: "0.5rem" }}>7-digit</span>
					<label
						className="palindrome-toggle-switch"
						style={{
							border: "2px solid rgba(255, 255, 255, 0.5)", // Stroke with 50% opacity
							borderRadius: "1rem",
						}}
					>
						<input
							type="checkbox"
							checked={isEightDigit}
							onChange={toggleFormat}
							style={{
								opacity: 0,
								position: "absolute",
								width: "100%",
								height: "100%",
								cursor: "pointer",
							}}
						/>
						<span
							className="palindrome-toggle-thumb"
							style={{
								left: isEightDigit ? "1rem" : "0",
							}}
						></span>
					</label>
					<span style={{ marginLeft: "0.5rem" }}>8-digit</span>
				</div>
			)}
		</div>
	);
};

export default PalindromePage;
