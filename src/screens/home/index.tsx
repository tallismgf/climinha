import { FC, useEffect } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useQuery } from 'react-query'
import { Header, Temperature } from '../../components'
import { Climates } from '../../components/climates'
import { getWeather } from '../../api'
import { Text } from '../../styled'
import { Container } from './styled'

const dataGyn = {
  lat: '-16.6954999',
  lon: '-49.4443513'
}

export const Home: FC = () => {
  const { data, isLoading } = useQuery('getWeather', () => getWeather(dataGyn), { retry: 3 })

  return (
      <Container>
        <Header 
          city='Goiânia'
        />

        <Temperature data={data?.current}/>

        <Climates data={data?.daily} />

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