import TodaysForecastElem from './TodaysForecastElem';
import './TodayForecast.css';
export const TodaysForecast = ({
	weatherData: {
		forecast: {
			forecastday: [currentDay],
		},
	},
}) => {
	const todaysForecastByHours = [currentDay.hour[5], currentDay.hour[8], currentDay.hour[11], currentDay.hour[14], currentDay.hour[17], currentDay.hour[20]];
	return (
		<section className='todays-forecast'>
			<h3>TODAY'S FORECAST</h3>
			<div className='todays-forecast-days'>
				{todaysForecastByHours.map(({ time, condition: { icon, text }, temp_c }, index) => {
					return (
						<TodaysForecastElem
							time={time}
							icon={icon}
							text={text}
							temp_c={temp_c}
							key={index}
						/>
					);
				})}
			</div>
		</section>
	);
};
