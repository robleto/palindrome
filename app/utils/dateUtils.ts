// app/utils/dateUtils.ts

export const getAllDateFormats = (date: Date) => {
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();
	const yy = year % 100;

	const mm = String(month).padStart(2, "0");
	const dd = String(day).padStart(2, "0");
	const yyyy = String(year);
	const yyStr = String(yy).padStart(2, "0");

	return {
		"4-digit":
			month < 10 && day < 10 && yy < 10 ? `${month}${day}${yy}` : "",
		"5-digit":
			(month < 10 && day >= 10) || (month >= 10 && day < 10)
				? `${month}${day}${yyStr}`
				: "",
		"6-digit": `${mm}${dd}${yyStr}`,
		"7-digit": `${month}${day}${yyyy}`,
		"8-digit": `${mm}${dd}${yyyy}`,
	};
};

export const isPalindrome = (str: string): boolean => {
	return str === str.split("").reverse().join("");
};

export const getAllPalindromeFormats = (date: Date) => {
	const formats = getAllDateFormats(date);
	const results = Object.entries(formats)
		.filter(([_, value]) => value !== "")
		.map(([label, value]) => ({
			label,
			value,
			isPalindrome: isPalindrome(value),
		}));
	return results;
};

export const getFirstPalindrome = (date: Date) => {
	const allFormats = getAllPalindromeFormats(date);
	const first = allFormats.find((f) => f.isPalindrome);
	if (first) return first;
	return {
		label: "8-digit",
		value: getAllDateFormats(date)["8-digit"],
		isPalindrome: false,
	};
};
