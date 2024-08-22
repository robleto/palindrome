export const palindromeConfig = {
	eightDigit: {
		bgImage: {
			palindrome: "/bg-yes.svg",
			notPalindrome: "/bg-no.svg",
		},
		gradient: {
			palindrome: "linear-gradient(244deg, #23842D 18.85%, #000 66.81%)",
			notPalindrome:
				"linear-gradient(244deg, #842323 18.85%, #000 66.81%)",
		},
		text: {
			palindrome: "Yes! Today is a Palindrome",
			notPalindrome: "Today is NOT a palindrome",
		},
		fontSize: "20vw",
	},
	sevenDigit: {
		bgImage: {
			palindrome: "/bg-yes.svg",
			notPalindrome: "/bg-no.svg",
		},
		gradient: {
			palindrome: "linear-gradient(244deg, #2D3884 18.85%, #000 66.81%)",
			notPalindrome:
				"linear-gradient(244deg, #842D7A 18.85%, #000 66.81%)",
		},
		text: {
			palindrome: "Yes! Today is a 7-Digit Palindrome",
			notPalindrome: "Today is NOT a 7-Digit palindrome",
		},
		fontSize: "22vw",
	},
};
