import React from 'react'
import { Container } from './styled'
import { CountDown } from '../../components/countdown'

const LongPause: React.FC = () => {
  return (
    <Container>
      <CountDown color="blue" title="Pausa Longa" time={900} />
    </Container>
  )
}

export default LongPause
