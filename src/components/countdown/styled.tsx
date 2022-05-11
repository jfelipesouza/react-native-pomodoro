import styled from 'styled-components/native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

type Colors = {
  color: 'red' | 'blue' | 'yellow'
}

export const Container = styled.TouchableOpacity<Colors>`
  width: ${({ theme }) => theme.dimensions.width * 0.8}px;
  height: ${({ theme }) => theme.dimensions.width * 0.8}px;
  align-items: center;
  justify-content: space-evenly;
  border-width: 5px;
  border-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: ${({ theme }) => theme.dimensions.width * 0.8}px;
  padding: ${({ theme }) => theme.space.lg};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xlg};
  color: ${({ theme }) => theme.colors.gray};
`

export const Time = styled.Text<Colors>`
  font-size: ${({ theme }) => theme.fontSize.xxxlg};
  color: ${({ theme, color }) => theme.colors[color]};
`

export const Inline = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
`

export const IconButton = styled.TouchableOpacity``

export const Icon = styled(MaterialIcon)``
