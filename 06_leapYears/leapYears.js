const leapYears = function (year) {
	return !(year % 400)
		? true
		: !(year % 100)
		? false
		: !(year % 4)
		? true
		: false;
};

// Do not edit below this line
module.exports = leapYears;
