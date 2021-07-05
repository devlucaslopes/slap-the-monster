import React, { ReactNode } from 'react'

import * as S from './styles'

type GameProps = {
  children: ReactNode
}

export const Game = ({ children }: GameProps) => (
  <S.Container>{children}</S.Container>
)
