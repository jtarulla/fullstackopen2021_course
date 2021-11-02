import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Weather = ({ city }) => {
    const [ weather, setWeather ] = useState({});
    const [ cityProp, setCityProp ] = useState(city);
    const params = {
        access_key: `${process.env.REACT_APP_WEATHER_API}`,
        query: `${cityProp}`
    }
    const WEATHER_PROMISE = axios.get('http://api.weatherstack.com/current', {params});

    const getWeather = async () => {
        setCityProp(city);

        if (cityProp === city) {
            const weatherObject = await WEATHER_PROMISE;
            setWeather(weatherObject.data.current);
        }
    }

    useEffect(() => {
        getWeather().catch(error => console.log(error));
        return () => {
            setWeather({});
        };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [city, cityProp])

    return (
        <div>
            <span>
                <b>temperature: </b> 
                {
                    weather
                    ? `${weather.temperature} Celcius` 
                    : 'info not available at the moment'
                }
            </span> <br />

            <img src={weather?.weather_icons} alt="weather" /> <br />

            <span>
                <b>wind:</b>
                {
                    weather 
                    ? `${weather.wind_speed} direction ${weather.wind_dir}`
                    : 'info not available at the moment'
                } km/h
            </span>
        </div>
    )
}

export default Weather;