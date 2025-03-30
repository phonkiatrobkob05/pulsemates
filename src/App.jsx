import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Navbar" element={<Navbar />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
