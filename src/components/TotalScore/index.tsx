import React from 'react'

import * as S from './styles'

type TotalScoreProps = {
  value: number
}

export const TotalScore = ({ value }: TotalScoreProps) => (
  <S.Score>Score: {value}</S.Score>
)
