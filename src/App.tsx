import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { StartStop } from './components/StartStop'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Header>Slap the monster!</Header>

        <StartStop />
      </Layout>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
