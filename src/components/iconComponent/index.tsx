import { icons } from './iconList'
//@ts-ignore
import Image from 'react-native-remote-svg'

type IconProps = {
  iconName: string
  width: number
  height: number
}

type iconsKey = keyof typeof icons

export const Icon = ({ iconName, width, height }: IconProps) => {  
  return <Image 
    source={icons[iconName as iconsKey] || icons['default']}
    style={{ width, height }}
  />
}