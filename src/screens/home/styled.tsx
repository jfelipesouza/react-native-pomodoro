import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xxxlg};
`

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue};
  position: absolute;
  bottom: 30px;
  border-radius: 20px;
`
