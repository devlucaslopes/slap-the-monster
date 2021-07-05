import React, { ReactNode } from 'react'

import * as S from './styles'

type MonsterGridProps = {
  children: ReactNode
}

export const MonsterGrid = ({ children }: MonsterGridProps) => (
  <S.Grid>{children}</S.Grid>
)
