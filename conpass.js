function startConpassFlux(userName, userEmail, FLUX_ID) {

	console.info('Conpass flux started.');

	/** Initialization with credentials - switch to very real cred **/
	if (window.Conpass) {
		window.Conpass.init({
			name: userName,
			email: userEmail
		});
	}

	/** Constants **/
	const moment = new Date();

	/** Variables **/
	let now = {
		day: moment.getDay(),
		month: moment.getMonth() + 1,
		year: moment.getFullYear()
	};

	now = {
		...now,
		fullDate: `${now.year}/${now.month}/${now.day}`
	};


	/** Side Functions **/
	function getDaysSinceLastShowedUp(dateNow, dateStored) {
		const years = parseInt(dateStored.year) - parseInt(dateNow.year);
		const months = parseInt(dateStored.month) - parseInt(dateNow.month);
		const days = parseInt(dateStored.day) - parseInt(dateNow.day);

		return { days, months, years };
	}

	function conpassFluxStartAndStore(dateNow) {
		Conpass.startFlow(FLUX_ID, { show: true })
		localStorage.setItem('conpassFluxShowedUp', JSON.stringify({ date: dateNow, showed: true }));
	}

	function conpassFluxRandomStart(dateNow) {
		const choices = [false, true];
		const randomDecision = getRandomInt(0, 2);

		if (choices[randomDecision]) {
			conpassFluxStartAndStore(dateNow);
		}
	}

	function getRandomInt(min, max) {
		return min + Math.floor((max - min) * Math.random());
	}

	function wasConpassFluxShowedUp(dateNow) {
		const isConpassFluxStored = localStorage.getItem('conpassFluxShowedUp');

		if (isConpassFluxStored) {
			const { date } = JSON.parse(isConpassFluxStored);
			return date.fullDate === dateNow.fullDate;
		} else return false;
	}

	/** Main Function **/
	function conpassFluxMakeDecision(dateNow) {
		const hasStored = localStorage.getItem('conpassFluxShowedUp') ? true : false;

		if (hasStored) {
			const wasShowed = wasConpassFluxShowedUp(dateNow);
			if (!wasShowed) {
				const { date } = localStorage.getItem('conpassFluxShowedUp');
				const { days, months, years } = getDaysSinceLastShowedUp(dateNow, date);

				if (years > 0 || months > 0 || days > 1) conpassFluxStartAndStore(dateNow);
				else conpassFluxRandomStart(dateNow);
			}
		} else conpassFluxStartAndStore(dateNow);
	}

	conpassFluxMakeDecision(now);
}