import { Text as TextNative, TextProps } from 'react-native'
import { theme } from '../../global/styles/theme'


export const Text = ({ children, style }: TextProps) => {

  return (
    <TextNative 
      style={[style, { color: theme.colors.white }]} 
    >
      {children}
    </TextNative>
  )
}