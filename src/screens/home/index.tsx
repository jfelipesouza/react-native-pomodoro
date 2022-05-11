import React from 'react'
import { CountDown } from '../../components/countdown'

import { Container } from './styled'

const Home: React.FC = () => {
  return (
    <Container>
      <CountDown color="red" title="Foco" time={1500} />
    </Container>
  )
}

export default Home
