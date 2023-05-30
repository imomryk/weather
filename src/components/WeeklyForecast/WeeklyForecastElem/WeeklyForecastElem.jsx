import './WeeklyForecastElem.css';
export const WeeklyForecastElem = ({ oneDayForecast }) => {
	if (Object.keys(oneDayForecast).length !== 0) {
		const {
			date,
			day: {
				maxtemp_c,
				mintemp_c,
				condition: { icon, text },
			},
		} = oneDayForecast;
		const dayOfWeek = new Date(date).toDateString().slice(0, 3);
		return (
			<div className='weekly-forecast-elem'>
				<div className='weekly-forecast-elem-day'>{dayOfWeek}</div>
				<div className='weekly-forecast-elem-condition'>
					<img
						src={icon}
						alt={text}
						title={text}
					/>
					<div>{text}</div>
				</div>

				<div className='weekly-forecast-elem-temp'>
					{Math.round(maxtemp_c)}/<span>{Math.round(mintemp_c)}</span>
				</div>
			</div>
		);
	} else {
		return <div className='weekly-forecast-elem-nodata'>No Data Avialble</div>;
	}
};
