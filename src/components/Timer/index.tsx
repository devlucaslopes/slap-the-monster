import React, { useState, useRef, useEffect } from 'react'

import config from '../../config'

import * as S from './styles'

type TimerProps = {
  onEnd: () => void
}

export const Timer = ({ onEnd }: TimerProps) => {
  const [internalTime, setInternalTime] = useState(config.TIME_LIMIT)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timerRef = useRef(config.TIME_LIMIT) as any

  useEffect(() => {
    if (internalTime === 0 && onEnd) onEnd()
  }, [internalTime, onEnd])

  useEffect(() => {
    timerRef.current = setInterval(
      () => setInternalTime(internalTime - config.TIME_INTERVAL),
      config.TIME_INTERVAL
    )
    return () => {
      clearInterval(timerRef.current)
    }
  }, [internalTime, config.TIME_INTERVAL])

  return (
    <S.Time timeLeft={internalTime / 1000}>{`Time: ${
      internalTime / 1000
    }s`}</S.Time>
  )
}
