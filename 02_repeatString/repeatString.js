const repeatString = function (string, numberOfTimes) {
	return numberOfTimes >= 0
		? Array(numberOfTimes)
				.fill(string)
				.reduce((t, e) => t + e, "")
		: "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
