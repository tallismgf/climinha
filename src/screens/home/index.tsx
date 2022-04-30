import { FC, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useQuery } from 'react-query'
import { Header, Temperature } from '../../components'
import { Climates } from '../../components/climates'
import { getWeather, getLocationByCoord } from '../../api'
import { Text } from '../../styled'
import { Container } from './styled'
import { LocationProps } from '../../ts'

const dataGyn = {
  lat: '-16.6954999',
  lon: '-49.4443513'
}


export const Home: FC<LocationProps> = (data: LocationProps) => {
  const { 
    data: dataWeather, 
    isLoading: isLoadingWeather, 
    refetch: refetchWeather 
  } = useQuery('getWeather', () => getWeather(data), { retry: 3 })
  const { data: 
    dataLocation, 
    isLoading: isLoadingLocation, 
    refetch: refetchLocation 
  } = useQuery('getLocationData', () => getLocationByCoord(data), { retry: 3 })

  useEffect(() => {
    // Validar depois o refetch
    //refetchWeather() 
    //refetchLocation()
  }, [data])

  return (
      <Container>
        <Header 
          city={dataLocation?.administrative_area || ''}
        />

        <Temperature data={dataWeather?.current}/>

        <Climates data={dataWeather?.daily} />

        <TouchableOpacity
          style={{
            height: 50,
            marginTop: 20,
            paddingHorizontal: 22
          }}
        >
          <View
            style={{
              backgroundColor: '#FFFFFF30',
              flex: 1,
              borderRadius: 24,
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center' }} >Previsão para 5 dias</Text>
          </View>
        </TouchableOpacity>

      </Container>
  )
}