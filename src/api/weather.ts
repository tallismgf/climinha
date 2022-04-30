import { AxiosResponse } from 'axios'
import { WEATHER_API_KEY } from '@env'
import { apiWeather } from '../service/api'
import { LocationProps, WeatherResponseProps } from '../ts'

export const getWeather = async ({latitude, longitude}: LocationProps): Promise<WeatherResponseProps | undefined> => {
  try {
    //return undefined
    const urlParams = `lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&exclude=minutely,hourly,alert&units=metric&lang=pt_br`
    const { data }: AxiosResponse<WeatherResponseProps> = await apiWeather.get(`/onecall?${urlParams}`)

    return data
  } catch (error) {
    console.log(error)
    return undefined
  }
}