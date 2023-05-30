import './TodaysWeather.css';

export const TodaysWeather = ({
	weatherData: {
		location: { name },
		current: {
			temp_c,
			condition: { icon, text },
		},
	},
	todayChanceOfRain,
}) => {
	// console.log(currentDay);
	return (
		<section className='todays-weather'>
			<div className='todays-weather-info'>
				<h1>{name}</h1>
				<div className='todays-weather-rain'>Chance of rain: {todayChanceOfRain}</div>
				<div className='todays-weather-temp'>{Math.round(temp_c)}&deg;</div>
			</div>

			<div className='todays-weather-img'>
				<img
					src={icon}
					alt={text}
					title={text}
				/>
			</div>
		</section>
	);
};
