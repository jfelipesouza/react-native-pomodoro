import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'
import BackgroundTimer from 'react-native-background-timer'
import { Container, Icon, IconButton, Inline, Time, Title } from './styled'

type CountDownProps = {
  title: string
  color: string
  time: number
}

export const CountDown: React.FC<CountDownProps> = ({ color, title, time }) => {
  const { icons, colors } = useTheme()

  const [isPlay, setIsPlay] = useState(false)
  const [timeOn, setTimeOn] = useState(time)

  const initialTime = time

  const handleStartCountDown = () => {
    setIsPlay(current => !current)
  }

  const startTimeOut = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setTimeOn(currentTime => {
        if (currentTime > 0) return currentTime - 1
        else return 0
      })
    }, 1000)
  }

  const handleResetTime = () => {
    setTimeOn(initialTime)
  }

  const timeReturn = () => {
    let minutes: number | string = parseInt((timeOn / 60) as any)
    let seconds: number | string = timeOn % 60

    if (seconds < 10) seconds = `0${seconds}`
    if (minutes < 10) minutes = `0${minutes}`

    return {
      minutes,
      seconds
    }
  }

  useEffect(() => {
    if (isPlay) startTimeOut()
    else {
      BackgroundTimer.stopBackgroundTimer()
    }
    return () => {
      BackgroundTimer.stopBackgroundTimer()
    }
  }, [isPlay])

  useEffect(() => {
    if (timeOn === 0) {
      handleStartCountDown()
    }
  }, [timeOn])

  return (
    <Container
      color={color as 'red'}
      activeOpacity={0.5}
      onPress={handleStartCountDown}
    >
      <Title>{title}</Title>
      <Time color={color as 'red'}>
        {`${timeReturn().minutes}:${timeReturn().seconds}`}
      </Time>

      <Inline>
        <IconButton activeOpacity={0.7} onPress={handleStartCountDown}>
          {isPlay ? (
            <Icon
              name="pause"
              color={colors[color as 'red']}
              size={icons.xxxlg}
            />
          ) : (
            <Icon
              name="play-arrow"
              color={colors[color as 'red']}
              size={icons.xxxlg}
            />
          )}
        </IconButton>
        {timeOn === 0 && (
          <IconButton onPress={handleResetTime}>
            <Icon
              name="restore"
              color={colors[color as 'red']}
              size={icons.xxxlg}
            />
          </IconButton>
        )}
      </Inline>
    </Container>
  )
}
