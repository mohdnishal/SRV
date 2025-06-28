import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import RegForm from './Components/Form/RegForm'
import LogForm from './Components/Form/LogForm'

function App() {
  const [view, setView] = useState('register');

  return (
     <div className="greenleaf-container">
      <Navbar />
      <div className="main-section">
        <div className="left-content">
            <h4>Register for Swachhatha</h4>
            <h1>Green Leaf Rating</h1>
            <p>in Hospitality Facilities</p>
            <Hero />
          </div>
        <div className={`right-content ${view === 'login' ? 'login-view' : ''}`}>
          {view === 'register' ? (
            <RegForm switchToLogin={() => setView('login')} />
          ) : (
            <LogForm switchToRegister={() => setView('register')} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
