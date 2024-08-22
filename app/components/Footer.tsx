"use client";

import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module
import Image from "next/image";


const Footer: React.FC = () => {
	return (
		<footer className="footer w-full bg-gray-800 text-gray-400 flex justify-between items-center px-4 py-2">
			<p className="footer-left text-sm">&nbsp;</p>
			<div className="footer-right flex items-center space-x-4">
				<p className="text-sm">
					Illustrations and Design by{" "}
					<a
						href="https://www.robleto.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Greg Robleto
					</a>
				</p>
				<div className="social-icons flex space-x-2">
					<a
						href="https://www.robleto.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/_icons/website-icon.svg"
							alt="Website"
							width={24} // Set the appropriate width
							height={24}
							className="w-6 h-6"
						/>
					</a>
					<a
						href="https://www.codepen.com/robleto"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/_icons/codepen-icon.svg"
							alt="CodePen"
							width={24} // Set the appropriate width
							height={24}
							className="w-6 h-6"
						/>
					</a>
					<a
						href="https://www.dribbble.com/robleto"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/_icons/dribbble-icon.svg"
							alt="Dribbble"
							width={24} // Set the appropriate width
							height={24}
							className="w-6 h-6"
						/>
					</a>
					<a
						href="https://www.github.com/robleto"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/_icons/github-icon.svg"
							alt="GitHub"
							width={24} // Set the appropriate width
							height={24}
							className="w-6 h-6"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/robleto"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image
							src="/_icons/linkedin-icon.svg"
							alt="LinkedIn"
							width={24} // Set the appropriate width
							height={24}
							className="w-6 h-6"
						/>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
