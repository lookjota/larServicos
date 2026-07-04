import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/servicos/:slug"
          element={<ServicePage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
