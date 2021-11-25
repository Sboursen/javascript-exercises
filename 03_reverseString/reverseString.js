const reverseString = function (str) {
	return str
		.split("")
		.map((c, i, arr) => arr[arr.length - i - 1])
		.join("");
};

// Do not edit below this line
module.exports = reverseString;
