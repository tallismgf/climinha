import { View } from 'react-native'
import { Text } from '../../styled'
import { ContainerTemperature } from './styled'

export const Temperature = () => {

  return (
    <ContainerTemperature>
      <View style={{ flexDirection: 'row' }} >
        <Text
          style={{
            fontSize: 96
          }}
        >
          30
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
        Limpo
      </Text>
    </ContainerTemperature>
  )
}

// <Text >&#8451;</Text>