import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Dashboard from './pages/Dashboard'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
