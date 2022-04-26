import { Text } from '../../styled'
import { ContainerHeader } from './styled'

type HeaderProps = {
  city: string
}

export const Header = ({ city }: HeaderProps) => {

  return (
    <ContainerHeader>
      <Text
        bold
        fontSize='28'
      >
        {city}
      </Text>
    </ContainerHeader>
  )
}