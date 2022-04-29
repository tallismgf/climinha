import { useEffect, useState } from 'react'
import { SafeAreaView, FlatList, View, ListRenderItem } from 'react-native'
import { Text } from '../../styled'
import { WeatherDailyProps, WeatherProps } from '../../ts'
import { Icon } from '../index'

const weekDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

type ClimateProps = {
  id: string
  day: string
  weather: WeatherProps
  max: number
  min: number
}

type ClimatesProps = {
  data: WeatherDailyProps[] | undefined
}

export const Climates = ({ data }: ClimatesProps) => {
  const [dataWeather, setDataWeather] = useState<ClimateProps[]>([])

  useEffect(() => {
    if(data) {
      const temp = adapterData(data)
      setDataWeather(temp)
    }
  }, [data])

  const adapterData = (data: WeatherDailyProps[]): ClimateProps[] => {
    const temp = data.map(({dt, temp, weather}, index) => {

      let dayTemp = '' 
      if(index === 0) dayTemp = 'Hoje'
      if(index === 1) dayTemp = 'Amanhã'
      let dayString: string = dayTemp || weekDay[new Date(dt * 1000).getUTCDay()]

      const tempWeather: ClimateProps = {
        id: dt.toString(),
        max: temp.max,
        min: temp.min,
        weather: weather[0],
        day: dayString,
      }

      return tempWeather
    })

    return temp
  }

  const renderItem: ListRenderItem<ClimateProps> = ({ item }) => {
    const { day, weather: { description, icon }, max, min } = item

    return (
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >

          <Icon
            iconName={icon}
            width={34}
            height={34}
          />

          <Text fontSize='18' >
            {`${day} - ${description}`}
          </Text>
        </View>

        <View>
          <Text fontSize='18'>
            {`${min.toFixed(0)}° / ${max.toFixed(0)}°`}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView>
      <FlatList 
        renderItem={renderItem}
        keyExtractor={({ id }) => id}
        data={dataWeather.slice(0, 3)}
      />
    </SafeAreaView>
  )
}