import WeeklyForecastElem from './WeeklyForecastElem';
import './WeeklyForecast.css';
export const WeeklyForecast = ({
	weatherData: {
		forecast: { forecastday },
	},
}) => {
	const weeklyForecast = [];

	for (let i = 0; i < 7; i++) {
		forecastday[i] ? weeklyForecast.push(forecastday[i]) : weeklyForecast.push({});
	}
	return (
		<section className='weekly-forecast'>
			<h3>7-DAY FORECAST</h3>
			<div className='weekly-forecast-days'>
				{weeklyForecast.map((oneDayForecast, index) => {
					return (
						<WeeklyForecastElem
							oneDayForecast={oneDayForecast}
							key={index}
						/>
					);
				})}
			</div>
		</section>
	);
};
