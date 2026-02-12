import { Route, Routes } from 'react-router-dom'
import Notes from './components/Notes'
import Create from './components/Create'
import { Container } from '@mui/material'

function App() {
  return (
  <Container>
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </Container>
  )
}

export default App
