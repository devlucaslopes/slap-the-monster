import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles/global'
import theme from './styles/theme'

import { Layout } from './components/Layout'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <h1>Slap the monster!</h1>
      </Layout>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
