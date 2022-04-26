import { SafeAreaView, FlatList, View, ListRenderItem } from 'react-native'
import { Text } from '../../styled'

const mockData = [
  {
    id: '1',
    label: 'Hoje-Limpo',
    max: '32',
    min: '18'
  },
  {
    id: '2',
    label: 'Hoje-Limpo',
    max: '32',
    min: '18'
  },
  {
    id: '3',
    label: 'Hoje-Limpo',
    max: '32',
    min: '18'
  },
]

type climateFlatListProps = {
  id: string
  label: string
  max: string
  min: string
}

export const Climates = () => {

  const renderItem: ListRenderItem<climateFlatListProps> = ({ item }) => {
    const { label, max, min } = item

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

          <View 
            style={{
              height: 18,
              width: 18,
              borderRadius: 16,
              backgroundColor: 'yellow',
              marginRight: 6
            }}  
          />

          <Text fontSize='18' >
            {label}
          </Text>
        </View>

        <View>
          <Text fontSize='18'>
            {`${min}° / ${max}°`}
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
        data={mockData}
      />
    </SafeAreaView>
  )
}