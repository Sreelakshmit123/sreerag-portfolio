import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png'


function Header() {
  return (
    <>
    

      <Navbar collapseOnSelect expand="lg" className='navbar-header  p-0 ' >
        <Container className='header'>
          <Navbar.Brand>
          <Link to={'/'} className='logo'><img data-aos="fade-right" className='logo' src={logo} alt="" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle className='bg-light' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse  id="responsive-navbar-nav">
            <Nav >
              <nav data-aos="fade-right"data-aos-duration="3000" className='nav '>
                <Link to={'/'} className='nav' style={{color:'rgb(255, 153, 0)'}}>Home</Link>
                <a href='#aboutme' className='nav'>About me</a>
                <a href='#projects' className='nav'>Projects</a>
                <a href='#projects' className='nav'>Certifications</a>
                <a href='#contactme' className='nav'>Contact</a>
                         
              </nav>
              </Nav>
              <Nav data-aos="fade-left"data-aos-duration="3000" className='ms-auto'>
                  <nav className='nav '>
                  <a target='_blank' href='https://www.linkedin.com/in/sreeragt/'><i class="fa-brands fa-linkedin-in  text-warning fs-4"></i>    </a>
                  <a target='_blank' href='https://www.linkedin.com/in/sreeragt/'><i class="fa-brands fa-whatsapp text-warning fs-4"></i>     </a>
                  <a target='_blank' href='https://www.linkedin.com/in/sreeragt/'><i class="fa-brands fa-instagram  text-warning fs-4"></i>     </a>
                  <a target='_blank' href='https://www.linkedin.com/in/sreeragt/'><i class="fa-brands fa-facebook  text-warning fs-4"></i>     </a>
                  </nav>    
               
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header