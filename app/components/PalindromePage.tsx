// app/components/PalindromePage.tsx
"use client";

import React, { useState, useEffect } from "react";
import { getAllPalindromeFormats } from "../utils/dateUtils";
import { palindromeConfig } from "../config/palindromeConfig";

const PalindromePage: React.FC = () => {
	const [formats, setFormats] = useState<
		{
			label: string;
			value: string;
			isPalindrome: boolean;
		}[]
	>([]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	useEffect(() => {
		const today = new Date();
		const allFormats = getAllPalindromeFormats(today);

		// Prioritize any YES palindrome in preferred order: 8 > 7 > 6 > 5
		const priority = ["8-digit", "7-digit", "6-digit", "5-digit"];
		const prioritizedIndex = priority
			.map((label) =>
				allFormats.findIndex((f) => f.label === label && f.isPalindrome)
			)
			.find((i) => i !== -1);

		setFormats(allFormats);
		if (prioritizedIndex !== undefined && prioritizedIndex !== -1) {
			setSelectedIndex(prioritizedIndex);
		}
	}, []);

	const current = formats[selectedIndex];
	const config =
		palindromeConfig[current?.label as keyof typeof palindromeConfig] ||
		palindromeConfig["eightDigit"];

	return (
		<div
			className="palindrome-container"
			style={{
				background: current?.isPalindrome
					? "linear-gradient(244deg, #23842D 18.85%, #000 66.81%)"
					: "linear-gradient(244deg, #842323 18.85%, #000 66.81%)",
			}}
		>
			{/* SVG Background */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `url(${
						current?.isPalindrome
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
					{current?.isPalindrome ? (
						<span>
							<span style={{ color: "#1CDC30" }}>Yes!</span> Today
							is a Palindrome:
							<br />
							<span style={{ fontWeight: 400, fontSize: "90%", opacity: 0.8, color: "#1CDC30" }}>
								({current?.label.replace("-digits", "-digits")}{" "})
							</span>
						</span>
					) : (
						<span>
							Today is{" "}
							<span style={{ fontWeight: 900, color: "#D40606" }}>
								NOT
							</span>{" "}
							a Palindrome: 
							<br />
							<span style={{ fontWeight: 400, fontSize: "90%", opacity: 0.8, color: "#D40606" }}>
								({current?.label.replace("-digits", "-digits")} )
							</span>
						</span>
					)}
				</h1>
				<div className="palindrome-content">
					{(() => {
						if (!current) return null;
						const value = current.value;
						const middleIndex = Math.floor(value.length / 2);
						const isOdd = value.length % 2 !== 0;

						const left = value.slice(0, middleIndex);
						const right = value.slice(
							isOdd ? middleIndex + 1 : middleIndex
						);
						const middle = isOdd ? value[middleIndex] : null;

						// Dynamically widen spacing for shorter formats (like 5-digit)
						const dynamicLeftMargin =
							value.length <= 5 ? "-8vw" : "-12vw";
						const dynamicRightMargin =
							value.length <= 5 ? "-8vw" : "-12vw";
						const dynamicLeftPadding =
							value.length <= 5 ? "12vw" : "10vw";
						const dynamicRightPadding =
							value.length <= 5 ? "12vw" : "10vw";

						return (
							<>
								<span
									className="palindrome-first-part"
									style={{
										fontSize: "28vw",
										marginRight: dynamicLeftMargin,
										paddingLeft: dynamicLeftPadding,
										transform:
											"perspective(300px) rotateY(45deg)",
									}}
								>
									{left}
								</span>
								{middle && (
									<span
										style={{
											fontSize: "18vw",
											margin: "0 1vw",
										}}
									>
										{middle}
									</span>
								)}
								<span
									className="palindrome-second-part"
									style={{
										fontSize: "28vw",
										marginLeft: dynamicRightMargin,
										paddingRight: dynamicRightPadding,
										transform:
											"perspective(300px) rotateY(-45deg)",
									}}
								>
									{right}
								</span>
							</>
						);
					})()}
				</div>

				{formats.length > 1 && (
					<div className="flex justify-center mt-6 space-x-2">
						{formats.map((_, i) => (
							<button
								key={i}
								onClick={() => setSelectedIndex(i)}
								style={{
									width: 12,
									height: 12,
									borderRadius: "50%",
									backgroundColor:
										i === selectedIndex
											? "#ffffff"
											: "rgba(255,255,255,0.4)",
									border: "none",
									cursor: "pointer",
								}}
							></button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default PalindromePage;
