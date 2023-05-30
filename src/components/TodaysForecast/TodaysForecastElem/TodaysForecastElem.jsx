import './TodaysForecastElem.css';

export const TodaysForecastElem = ({ time, icon, text, temp_c }) => {
	return (
		<div className='todays-forecaste-elem'>
			<div className='todays-forecaste-elem-time'>{time.slice(11)}</div>
			<img
				src={icon}
				alt={text}
				title={text}
			/>
			<div className='todays-forecaste-elem-temp'>{Math.round(temp_c)}&deg;</div>
		</div>
	);
};
