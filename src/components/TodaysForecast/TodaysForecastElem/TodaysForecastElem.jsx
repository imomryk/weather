import './TodaysForecastElem.css';

export const TodaysForecastElem = ({ time, icon, text, temp_c }) => {
	return (
		<div className='todays-forecast-elem'>
			<div className='todays-forecast-elem-time'>{time.slice(11)}</div>
			<img
				src={icon}
				alt={text}
				title={text}
			/>
			<div className='todays-forecast-elem-temp'>{Math.round(temp_c)}&deg;</div>
		</div>
	);
};
