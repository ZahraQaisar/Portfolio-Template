import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <nav>
      <div className='navigation'>
        <div className="name">Madelyn Troff</div>
        <ul>
          <li>About</li>
          <li>Project</li>
          <li>Contacts</li>
        </ul>
      </div>
    </nav>

    <section className='introduction'>
      <div className="introduction-text" >
        <h2 className="role">UI/UX DESIGNER</h2>
        <h2 className="title">Hello, my name is Madelyn Torff</h2>
        <p className="description">Short text with details about you, what you do or your professional career.You can add more information on the about page.</p>
        <div className="buttons">
          <button className="btn primary">Projects</button>
          <button className="btn secondary">Linkedin</button>
        </div>
      </div>

      <div className='image'>
        <img src="images/image.png" alt="profile-photo" />
      </div>
    </section>    
  </>
  )
}

export default App
