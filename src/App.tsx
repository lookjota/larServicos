import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Feature from './components/Feature'
import About from './components/About'
import Contact from './components/Contact'
import WhatsAppButton from './components/WhatsAppButton'
import ServicosPremium from './components/ServicosPremium'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="px-4 md:px-16 pt-20 lg:px-32 ">
      <Navbar/>
      <section id="home" >
        <Home/>  
      </section>
      <section id="servicos">
      <Feature/>
      </section>
        <ServicosPremium/>
      <section id="sobre" >
        <About/>
      </section>
      <section id="contato" >
        <Contact/>  
      </section>
      <WhatsAppButton/>
    </div>
  )
}

export default App
