import WeeklyForecastElem from './WeeklyForecastElem';
import './WeeklyForecast.css';
export const WeeklyForecast = ({
	weatherData: {
		forecast: { forecastday },
	},
}) => {
	const weeklyForecast = [];

	for (let i = 0; i < 7; i++) {
		forecastday[i]
			? weeklyForecast.push(forecastday[i]) //Зроблено для того, щоб у нас завжди було 7 елементів, в незалежності від того, чи 3 їх, чи 43. скоріш за все костиль, але що поробиш
			: weeklyForecast.push({});
	}
	return (
		<section className='weekly-forecast'>
			{weeklyForecast.map((oneDayForecast, index) => {
				return (
					<WeeklyForecastElem
						oneDayForecast={oneDayForecast}
						key={index}
					/>
				);
			})}
		</section>
	);
};
