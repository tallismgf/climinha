import { FC } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Header, Temperature } from '../../components'
import { Climates } from '../../components/climates'
import { Text } from '../../styled'
import { Container } from './styled'

export const Home: FC = () => {

  return (
      <Container>
        <Header 
          city='Goiânia'
        />

        <Temperature />

        <Climates />

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