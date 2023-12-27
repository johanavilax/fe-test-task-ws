import React from 'react'

import { Container } from '@mui/material'
import Board from './components/Board/Board'
import DataProvider from './Context/DataProvider'

const App: React.FC = () => {
  return (
    <DataProvider>
      <Container maxWidth="md">
        <Board />
      </Container>
    </DataProvider>
  )
}

export default App
