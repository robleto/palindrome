"use client";

import React, { useState } from "react";

const PalindromePage: React.FC = () => {
	const [isEightDigit, setIsEightDigit] = useState(true);

	const toggleFormat = () => {
		setIsEightDigit(!isEightDigit);
	};

	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen"
			style={{
				background:
					"linear-gradient(244deg, #23842D 18.85%, #000 66.81%)",
				width: "100%",
				height: "100vh",
			}}
		>
			<h1 className="text-4xl font-bold mb-4 text-white">
				Yes! Today is a Palindrome
			</h1>
			<p className="text-2xl mb-8 text-white">
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
	);
};

export default PalindromePage;
