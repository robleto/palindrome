export const formatDate = (date: Date, isEightDigit: boolean) => {
	const month = date.getMonth() + 1;
	const day = date.getDate();
	const year = date.getFullYear();

	if (isEightDigit) {
		return {
			firstPart: `${String(month).padStart(2, "0")}${String(day).padStart(
				2,
				"0"
			)}`,
			secondPart: year.toString(),
		};
	} else {
		return {
			firstPart: `${month}${String(day).padStart(2, "0")}`,
			secondPart: year.toString(),
		};
	}
};

export const isPalindrome = (firstPart: string, secondPart: string) => {
	return firstPart === secondPart.split("").reverse().join("");
};
