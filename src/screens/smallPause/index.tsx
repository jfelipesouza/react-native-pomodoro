import React from 'react'
import { Container } from './styled'
import { CountDown } from '../../components/countdown'

const SmallPause: React.FC = () => {
  return (
    <Container>
      <CountDown color="yellow" title="Pausa Curta" time={300} />
    </Container>
  )
}

export default SmallPause
