import styled from 'styled-components/native'
import { theme } from '../global/styles/theme'

type TextProps = {
  bold?: boolean
  fontSize?: string
}

export const Text = styled.Text<TextProps>`
  color: ${theme.colors.white};
  font-weight: ${({ bold }) => bold ? '700' : '400'};
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : '16px'};
`