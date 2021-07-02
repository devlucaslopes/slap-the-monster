import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { StartStop } from './components/StartStop'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header>Slap the monster!</Header>

        <StartStop
          isPlaying={isPlaying}
          onClick={() => setIsPlaying(!isPlaying)}
        />

        {isPlaying && <>jogando</>}
      </Layout>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
