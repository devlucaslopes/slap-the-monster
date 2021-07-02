import React, { ReactNode } from 'react'

import * as S from './styles'

type HeaderProps = {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => (
  <S.Wrapper>
    <h1>{children}</h1>
  </S.Wrapper>
)
