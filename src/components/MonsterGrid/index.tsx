import React, { ReactNode } from 'react'

import * as S from './styles'

type MonsterGrid = {
  children: ReactNode
}

export const MonsterGrid = ({ children }: MonsterGrid) => (
  <S.Grid>{children}</S.Grid>
)
