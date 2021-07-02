import React, { ReactNode } from 'react'

import * as S from './styles'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <S.Container>{children}</S.Container>
  </S.Wrapper>
)
