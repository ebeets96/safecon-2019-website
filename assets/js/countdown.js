// Grab the current date
function updateCountdown() {
	var endTime = new Date("10 May 2019 10:30:00 GMT-06:00");
	endTime = (Date.parse(endTime) / 1000);

	var now = new Date();
	now = (Date.parse(now) / 1000);

	var timeLeft = endTime - now;

	var days = Math.floor(timeLeft / 86400);
	var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
	var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
	var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

	if (hours < "10") {
		hours = "0" + hours;
	}
	if (minutes < "10") {
		minutes = "0" + minutes;
	}
	if (seconds < "10") {
		seconds = "0" + seconds;
	}

	$(".countdown-clock #days").html(days + "<span class=\"countdown-label\">Days</span>");
	$(".countdown-clock #hours").html(hours + "<span class=\"countdown-label\">Hours</span>");
	$(".countdown-clock #minutes").html(minutes + "<span class=\"countdown-label\">Minutes</span>");
	$(".countdown-clock #seconds").html(seconds + "<span class=\"countdown-label\">Seconds</span>");

}
setInterval(updateCountdown, 1000);