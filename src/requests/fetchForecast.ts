import axios from 'axios';

const url = 'https://api.weatherapi.com/v1/forecast.json';
const forecastDays = 3;

interface ForecastData {
	date: string;
	temperatureMinC: string;
	temperatureMaxC: string;
	temperatureMinF: string;
	temperatureMaxF: string;
	sunriseTime: string;
	sunsetTime: string;
	moonRiseTime: string;
	moonSetTime: string;
}

interface ForecastInfo {
	locationName: string;
	weatherData: ForecastData[];
}


const fetchForecast = async (location: string): Promise<ForecastInfo> => {
	try {
		const { data } = await axios({
			url,
			method: 'get',
			params: {
				q: location,
				days: forecastDays,
				key: process.env.WEATHER_API_KEY,
			},
			responseType: 'json',
		});

		const city = data.location.name;
		const country = data.location.country;
		const locationName = `${city}, ${country}`;

		const weatherData: ForecastData[] = data.forecast.forecastday.map((forecastDay) => {
			return {
				date: forecastDay.date,
				temperatureMinC: forecastDay.day.mintemp_c,
				temperatureMaxC: forecastDay.day.maxtemp_c,
				temperatureMinF: forecastDay.day.mintemp_f,
				temperatureMaxF: forecastDay.day.maxtemp_f,
				sunriseTime: forecastDay.astro.sunrise,
				sunsetTime: forecastDay.astro.sunset,
				moonRiseTime: forecastDay.astro.moonrise,
				moonSetTime: forecastDay.astro.moonset,
			};
		});

		return {
			locationName,
			weatherData,
		};
	} catch (error: Error) {
		console.error(error);
	}
};

export {
	fetchForecast,
};
