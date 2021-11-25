const sumAll = function (number1, number2) {
	if (
		typeof number1 !== "number" ||
		typeof number2 !== "number" ||
		number1 < 0 ||
		number2 < 0
	) {
		return "ERROR";
	} else {
		const min = Math.min(number1, number2);
		const length = Math.abs(number2 - number1) + 1;

		return new Array(length)
			.fill(0)
			.map((element, index) => min + index)
			.reduce((sum, element) => sum + element);
	}
};

// Do not edit below this line
module.exports = sumAll;
