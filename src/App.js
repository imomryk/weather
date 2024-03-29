import { useEffect, useState } from 'react';
import SearchForm from './components/SearchForm';
import TodaysWeather from './components/TodaysWeather';
import TodaysForecast from './components/TodaysForecast';
import TodaysAirConditions from './components/TodaysAirConditions';
import WeeklyForecast from './components/WeeklyForecast';
import axios from 'axios';
import './App.css';

function App() {
	const [weatherData, setWeatherData] = useState();

	useEffect(() => {
		// axios
		// 	.get('https://api.weatherapi.com/v1/forecast.json?key=1f9e26f40fa04906b3f182748232705&q=auto:ip&days=4&aqi=no&alerts=no')
		// 	.then((responce) => setWeatherData(responce.data));
		axios
			.get('https://api.ipify.org?format=json')
			.then((responce) =>
				axios
					.get('https://api.weatherapi.com/v1/forecast.json?key=1f9e26f40fa04906b3f182748232705&days=4&aqi=no&alerts=no&q=' + responce.data.ip)
					.then((responce) => setWeatherData(responce.data))
			);
	}, []);

	const todayChanceOfRain = weatherData ? weatherData.forecast.forecastday[0].day.daily_chance_of_rain + '%' : 'no data';

	return (
		<div className='container'>
			{weatherData ? (
				<main>
					<SearchForm setWeatherData={setWeatherData} />
					{weatherData ? (
						<TodaysWeather
							weatherData={weatherData}
							todayChanceOfRain={todayChanceOfRain}
						/>
					) : (
						<div>no data</div>
					)}
					{weatherData ? <TodaysForecast weatherData={weatherData} /> : <div>no data</div>}
					{weatherData ? (
						<TodaysAirConditions
							weatherData={weatherData}
							todayChanceOfRain={todayChanceOfRain}
						/>
					) : (
						<div>no data</div>
					)}
					{weatherData ? <WeeklyForecast weatherData={weatherData} /> : <div>no data</div>}
				</main>
			) : (
				<div className='lds-spinner'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
		</div>
	);
}

export default App;
