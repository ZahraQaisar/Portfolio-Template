import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    {/* NavBar */}
    <nav>
      <div className='navigation'>
        <div className="name">Madelyn Troff</div>
        <ul>
          <li> <a href="#about"> About<div className="hover-line"></div></a></li>
          <li> <a href="#projects"> Project<div className="hover-line"></div></a></li>
          <li> <a href="#contact"> Contacts<div className="hover-line"></div></a></li>
        </ul>
      </div>
    </nav>

    {/* About-Section */}
    <section className='introduction' id = "about">
      <div className="introduction-text" >
        <h2 className="role">UI/UX DESIGNER</h2>
        <h2 className="role-title">Hello, my name is Madelyn Torff</h2>
        <p className="description">Short text with details about you, what you do or your professional career.You can add more information on the about page.</p>
        <div className="buttons">
          <button className="btn primary"><a href="#projects">Projects</a></button>
          <button className="btn secondary"><a href="#">Linkedin</a></button>
        </div>
      </div>

      <div className='image'>
        <img src="images/image.png" alt="profile-photo" />
      </div>
    </section>   

    {/* Projects-Section */}

    <section className='projects' id = "projects">
      <h2 className="title">Projects</h2>
      <div className="content-separator"></div>

      <div className="project">
        <div className="project-details">
          <h2>Project Name</h2>
          <p>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
          <button className='project-btn'>View Project</button>
        </div>
        <div className="project-img">
          <img src="images/project1.jpg" alt="project1-image" />
        </div>
      </div>

      <div className="project">
        <div className="project-details">
          <h2>Project Name</h2>
          <p>What was your role, your deliverables, if the project was personal, freelancing.</p>
          <button className='project-btn'>View Project</button>
        </div>
        <div className="project-img">
          <img src="images/project2.jpg" alt="project1-image" />
        </div>
      </div>

      <div className="project">
        <div className="project-details">
          <h2>Project Name</h2>
          <p>You can also add in this description the type of the project, if it was for web, mobile, electron.</p>
          <button className='project-btn'>View Project</button>
        </div>
        <div className="project-img">
          <img src="images/project3.jpg" alt="project1-image" />
        </div>
      </div>
    </section> 

    {/* footer */}

    <footer>
      <div className='social-icons' id = "contact">
        <a href="#"><img src="images/instagram.png" alt="Instagram"/></a>
        <a href="#"><img src="images/linkedin.png" alt="LinkedIn"/></a>
        <a href="#"><img src="images/email.png" alt="Email"/></a>
      </div>
      <p>Madelyn Torff 2021</p>
    </footer>
  </>
  )
}

export default App
