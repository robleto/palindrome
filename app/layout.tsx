import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer"; // Import the Footer component

// Import the Saira Condensed font
import { Saira_Condensed } from "next/font/google";

const sairaCondensed = Saira_Condensed({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"], // Choose the weights you need
});

export const metadata: Metadata = {
	title: "Is Today a Palindrome?",
	description: "Check if today's date is a palindrome.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={sairaCondensed.className}>
			<body>
				<div className="w-full h-full flex flex-col overflow-auto">
					<div className="flex-1 flex min-h-screen flex-col">
						{children}
					</div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
