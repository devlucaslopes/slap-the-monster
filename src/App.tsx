import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import gsap from 'gsap'

import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { StartStop } from './components/StartStop'
import { Timer } from './components/Timer'
import { MonsterGrid } from './components/MonsterGrid'
import { Monster } from './components/Monster'
import { Game } from './components/Game'
import { TotalScore } from './components/TotalScore'

const generateMoles = (amount: number) =>
  new Array(amount).fill(0, 0, 5).map(() => ({
    speed: gsap.utils.random(0.5, 1),
    delay: gsap.utils.random(0.5, 4)
  }))

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [totalScore, setTotalScore] = useState(0)
  const [moles] = useState(generateMoles(5))

  const onSlap = (score: number) => setTotalScore(totalScore + score)

  const onStart = () => {
    setIsPlaying(true)
    setTotalScore(0)
  }

  const onEnd = () => {
    setIsPlaying(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header>Slap the monster!</Header>

        <TotalScore value={totalScore} />

        {!isPlaying && (
          <StartStop
            isPlaying={isPlaying}
            onClick={!isPlaying ? onStart : onEnd}
          />
        )}

        {isPlaying && (
          <Game>
            <Timer onEnd={() => setIsPlaying(false)} />

            <MonsterGrid>
              {moles.map(({ delay, speed }, index) => (
                <Monster
                  key={index}
                  delay={delay}
                  speed={speed}
                  onSlap={onSlap}
                />
              ))}
            </MonsterGrid>
          </Game>
        )}
      </Layout>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
