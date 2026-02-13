import { Route, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { theme } from './lib/theme'
import { ThemeProvider } from '@mui/material'
import Layout from './components/Layout'


function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Layout>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
