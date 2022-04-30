import { AxiosResponse } from 'axios'
import { LOCATION_API_KEY } from '@env'
import { apiLocation } from '../service/api'
import { GetLocationProps, LocationProps } from '../ts'

type GeoLocationResponseProps = {
  data: GetLocationProps[]
}

export const getLocationByCoord = async ({latitude, longitude}: LocationProps): Promise<GetLocationProps | undefined> => {
  try {
    const urlParams = `access_key=${LOCATION_API_KEY}&query=${latitude},${longitude}`
    const { data }: AxiosResponse<GeoLocationResponseProps> = await apiLocation.get(`/reverse?${urlParams}`)

    return !!data.data.length ? data.data[0] : undefined
  } catch (error) {
    console.log(error)
    return undefined
  }
}