import axios from 'axios';
import { API_KEY } from '../../config';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  console.log(1, city)
  const url = `${ROOT_URL}q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
