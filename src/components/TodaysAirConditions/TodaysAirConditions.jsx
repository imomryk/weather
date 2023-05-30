import './TodaysAirConditions.css';

export const TodaysAirConditions = ({
	weatherData: {
		current: { feelslike_c, wind_kph, uv },
	},
	todayChanceOfRain,
}) => {
	return (
		<section className='todays-air-conditions'>
			<h3>AIR CONDITION'S</h3>
			<div>
				<div>Real Feel {Math.round(feelslike_c)}&deg;</div>
				<div>Wind {Math.round(wind_kph)} km/h</div>
				<div>Chance of rain {todayChanceOfRain}</div>
				<div>UV index {uv}</div>
			</div>
		</section>
	);
};
