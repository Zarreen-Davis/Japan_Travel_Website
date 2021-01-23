function startTime() {
	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	let s = today.getSeconds();

	m = formatTimePart(m);
	s = formatTimePart(s);

	document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

	// Execute the startTime function (again), after waiting 500 milliseconds (0.5 seconds).
	let t = setTimeout(startTime, 500);
}

function formatTimePart(i) {
	// add zero in front of numbers < 10
	if (i < 10) {
		i = "0" + i;
	}

	return i;
}
