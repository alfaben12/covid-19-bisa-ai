const fetch = require("node-fetch");

fetch("https://pomber.github.io/covid19/timeseries.json")
	.then(response => response.json())
	.then(data => {
		let indonesia = data["Indonesia"]

	for (let i = 1; i < indonesia.length; i++) {
		// let confirmed = indonesia[i].confirmed - indonesia[i-1].confirmed
		// let recovered = indonesia[i].recovered - indonesia[i-1].recovered
		let deaths = indonesia[i].deaths - indonesia[i-1].deaths
		// let date = indonesia[i].date

		if(i == indonesia.length - 1){
			let all_deaths = indonesia[indonesia.length - 1].deaths
			let forecast_deaths = parseInt(all_deaths + all_deaths/indonesia.length, 10)
			console.log(forecast_deaths)
			indonesia.push({
				deaths: forecast_deaths
			})
		}
		console.log(deaths)
	}
	});

	function *iter(array) {
		for (var n = 0; n < array.length; n++)
			yield array[n];
	}