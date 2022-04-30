import { useEffect, useState } from 'react'
import { LogBox, StatusBar, View, Text } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as Location from 'expo-location'
import { Home } from './src/screens'
import { LocationProps } from './src/ts'

const queryClient = new QueryClient()
LogBox.ignoreLogs(['Setting a timer', 'Warning: componentWillReceiveProps has been renamed'])

export default function App() {
  const [locationData, setLocationData] = useState<LocationProps>({} as LocationProps)
  const [errorLocation, setErrorLocation] = useState('')

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async (): Promise<void> => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status)
    if ( status !== 'granted' ) {
      setErrorLocation('Premission to access location was denied')
    }

    let location = await Location.getCurrentPositionAsync({})
    setLocationData({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    })
  }

  if(!locationData.latitude || !locationData.longitude) {
    return (
      <View>
        <Text>Carregando data</Text>
      </View>
    )
  }

  return (
    <QueryClientProvider client={queryClient} >
      <StatusBar />
      <Home {...locationData} />
    </QueryClientProvider>
  );
}
