import { AxiosResponse } from 'axios'
import { WEATHER_API_KEY } from '@env'
import { api } from '../service/api'
import { WeatherRequestProps, WeatherResponseProps } from '../ts'

export const getWeather = async ({lat, lon}: WeatherRequestProps): Promise<WeatherResponseProps | undefined> => {
  try {
    return undefined
    const urlParams = `lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&exclude=minutely,hourly,alert&units=metric&lang=pt_br`
    const { data }: AxiosResponse<WeatherResponseProps> = await api.get(`/onecall?${urlParams}`)
    console.log('------------')
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return undefined
  }
}