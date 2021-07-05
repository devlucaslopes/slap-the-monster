import React from 'react'
import { Tween } from 'react-gsap'

import MonsterIcon from '../../assets/monster.png'

import config from '../../config'

import * as S from './styles'

type MonsterProps = {
  speed: number
  delay: number
  onSlap: (score: number) => void
}

export const Monster = ({ speed, delay, onSlap }: MonsterProps) => (
  <S.Wrapper>
    <Tween
      from={{ y: 100 }}
      to={{
        y: 0,
        yoyo: true,
        repeat: -1,
        speed,
        delay,
        repeatDelay: delay
      }}
      duration={0.5}
      stagger={0.2}
    >
      <S.HitBox onClick={() => onSlap(config.MONSTER_SCORE)}>
        <img src={MonsterIcon} alt="monster" />
      </S.HitBox>
    </Tween>
  </S.Wrapper>
)
