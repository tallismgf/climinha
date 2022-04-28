export type WeatherRequestProps = {
  lat: string
  lon: string
}

export type WeatherProps = {
  main: string
  description: string
  icon: string
}

export type WeatherCurrentProps = {
  temp: number
  weather: WeatherProps[]
}

export type WeatherDailyTempProps = {
  min: number
  max: number
}

export type WeatherDailyProps = {
  temp: WeatherDailyTempProps
  weather: WeatherProps[]
}


export type WeatherResponseProps = {
  current: WeatherCurrentProps
  daily: WeatherDailyProps[]
}