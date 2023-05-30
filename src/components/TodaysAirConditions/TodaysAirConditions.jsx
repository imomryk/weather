import './TodaysAirConditions.css';
import rainChance from '../../images/AirConditionsIcons/RainChance.svg';
import sun from '../../images/AirConditionsIcons/Sun.svg';
import wind from '../../images/AirConditionsIcons/Wind.svg';
import temp from '../../images/AirConditionsIcons/Temp.svg';
export const TodaysAirConditions = ({
	weatherData: {
		current: { feelslike_c, wind_kph, uv },
	},
	todayChanceOfRain,
}) => {
	return (
		<section className='todays-air-conditions'>
			<h3>AIR CONDITION'S</h3>
			<div className='todays-air-conditions-grid'>
				<div className='todays-air-conditions-elem'>
					<img
						src={temp}
						alt='Temp icon'
					/>
					<div className='todays-air-conditions-elem-info'>
						<h4>Real Feel</h4>
						<div>{Math.round(feelslike_c)}&deg;</div>
					</div>
				</div>
				<div className='todays-air-conditions-elem'>
					<img
						src={wind}
						alt='Wind icon'
					/>
					<div className='todays-air-conditions-elem-info'>
						<h4>Wind</h4>
						<div>{Math.round(wind_kph)} km/h</div>
					</div>
				</div>
				<div className='todays-air-conditions-elem'>
					<img
						src={rainChance}
						alt='Rain chance icon'
					/>
					<div className='todays-air-conditions-elem-info'>
						<h4>Chance of rain</h4>
						<div>{todayChanceOfRain}</div>
					</div>
				</div>
				<div className='todays-air-conditions-elem'>
					<img
						src={sun}
						alt='UV icon'
					/>
					<div className='todays-air-conditions-elem-info'>
						<h4>
							UV <br className='show-on-mobile'></br>index
						</h4>
						<div>{uv}</div>
					</div>
				</div>
			</div>
		</section>
	);
};
