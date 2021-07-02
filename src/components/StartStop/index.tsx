import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type StartStopProps = {
  isPlaying: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const StartStop = ({ isPlaying, ...props }: StartStopProps) => (
  <S.Button type="button" {...props}>
    {isPlaying ? 'Stop' : 'Start'}
  </S.Button>
)
