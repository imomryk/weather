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
			<div>
				<div>{dayOfWeek}</div>
				<img
					src={icon}
					alt={text}
					title={text}
				/>
				<span>{text}</span>
				<span>{Math.round(maxtemp_c)}||</span>
				<span>{Math.round(mintemp_c)}</span>
			</div>
		);
	} else {
		return <div>No Data</div>;
	}
};
