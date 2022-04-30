import axios from 'axios'

export const apiWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
})

export const apiLocation = axios.create({
  baseURL: 'http://api.positionstack.com/v1'
})