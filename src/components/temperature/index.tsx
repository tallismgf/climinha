import { View } from 'react-native'
import { Text } from '../../styled'
import { WeatherCurrentProps } from '../../ts'
import { ContainerTemperature } from './styled'

type TemperatureProps = {
  data: WeatherCurrentProps | undefined
}

export const Temperature = ({ data }: TemperatureProps) => {
  const weather = data?.weather[0]

  return (
    <ContainerTemperature>
      <View style={{ flexDirection: 'row' }} >
        <Text
          style={{
            fontSize: 96
          }}
        >
          {data?.temp.toFixed(1).toString()}
        </Text>
        <Text fontSize='36' style={{ marginTop: 24 }} >
          °C
        </Text>
      </View>

      <Text
        style={{
          fontSize: 22
        }}
      >
        {weather?.description}
      </Text>
    </ContainerTemperature>
  )
}

// <Text >&#8451;</Text>