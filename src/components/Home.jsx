import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Typewriter from 'typewriter-effect';
import profile from '../assets/images/sreerag.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Aos from 'aos';
import { Parallax } from 'react-scroll-parallax';
import Nav from 'react-bootstrap/Nav';
function Home() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    Aos.init();
  }, [])
  return (

    <>

      {/* Home landing page */}
      <div id='navbar' style={{ backgroundColor: 'black', color: 'white' }}  >
        <Header />
        <div className="contactinput container">
          <div className=" row ">
            <div className="landingpage col-lg-5">
              <p className='image-container'>
                <img data-aos="fade-right" className='profilephoto rounded-circle' src={profile} alt="" />
                <img className='background-image' src='https://i.pinimg.com/originals/96/97/37/969737711c8309bede132e6923cebe59.gif' alt="" />
              </p>
            </div>
            <div className="col-lg-1">
            <Nav className='contacticons ms-auto '>
                  <nav className='nav '>
                  <a target='_blank' href='https://www.linkedin.com/in/sreeragt/'><i class="fa-brands fa-linkedin-in  text-warning fs-4"></i>    </a>
                  <a target='_blank' href='https://www.linkedin.com/in/sreeragt/'><i class="fa-brands fa-whatsapp text-warning fs-4"></i>     </a>
                  <a target='_blank' href='https://www.linkedin.com/in/sreeragt/'><i class="fa-brands fa-instagram  text-warning fs-4"></i>     </a>
                  <a target='_blank' href='https://www.linkedin.com/in/sreeragt/'><i class="fa-brands fa-facebook  text-warning fs-4"></i>     </a>
                  </nav>    
               
              </Nav>
            </div>
            <div data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className="landingpage1 col-lg-6 ">
              <h6 className='text-warning' >Hello!</h6>
              <br />
              <h1 className='name'>I'm Er. Sreerag T</h1>
              <br />
              <h5 className='d-flex '>I'm a : <span className='ps-2 text-warning text-uppercase'><Typewriter
                options={{
                  strings: ['Engineer MEP', 'MEP Manager', 'Design Engineer-MEPF|ELV|BMS|FAPA', 'BIM Manager', 'BIM Engineer', 'BIM Coordinator', 'BIM Team Lead', 'BIM Modeler'],
                  autoStart: true,
                  loop: true,
                }}
              /></span></h5>
              <p className='mt-3'>I Am A Skilled And Passionate Web Developer With Experience In Dealing With Programming And Modern Web Technologies, And I Have Built A Lot Of Projects That Have Increased My Experience And Trained A Lot, I Am A Fast Learner And Always Love To Develop Myself.</p>
              <div className='d-flex mt-4'>
                <a id="download" className='dwld btn me-5 bg-warning text-dark p-2 fw-bolder mt-3' download>DOWNLOAD CV <i class="fa-solid fa-download"></i></a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* about section */}
      <div id='aboutme' className='home w-100 h-100' style={{ color: "white", backgroundColor: 'black' }} >
        <div className="ContainerHome1 container">
          <div className="row " >
            <div className=" col-lg-6 mt-4 aboutpara" data-aos="fade-right"
              data-aos-offset="300" data-aos-duration="1000"
              data-aos-easing="ease-in-sine">
                <h5 className='d-flex'>MY NAME IS SREERAG T <span className='typewritingcss text-warning text-uppercase ps-2'><Typewriter
                  options={{
                    strings: ['Engineer MEP', 'MEP Manager', 'Design Engineer-MEPF|ELV|BMS|FAPA', 'BIM Manager', 'BIM Engineer', 'BIM Coordinator', 'BIM Team Lead', 'BIM Modeler'],
                    autoStart: true,
                    loop: true,
                  }}
                /></span></h5>
                <p className='mt-4'>
                  I'm a highly skilled Mechanical engineering graduate from
                  Anna University Chennai in 2019 with over 3 years of relevant
                  experience in Mechanical, Electrical, Plumbing, Firefighting, Extra
                  Low voltage (ELV), Intelligent Building Management Systems
                  (IBMS), and Home Automation. With a strong foundation in
                  MEPF, ELV & IBMS design, estimation and modeling, i successfully implemented and coordinated BIM processes
                  at LOD300, LOD350, LOD400 and LOD500 stages in various
                  engineering projects.  my expertise includes designing and modeling
                  systems such as CCTV, Access Control Systems, Fire Alarm
                  Systems, Very Early Smoke Detection Apparatus (VESDA), Rodent
                  Repellent Systems, Public Address Systems, Intelligent Building
                  Management Systems and more using tools like AutoCAD, Revit
                  and Navisworks manage.With extensive knowledge in industry
                  standards like UL, EN (BS EN-54), NFPA72, ASHRAE, TIA/EIA, DIN
                  VDE0834, Indian Codes & Standards.
                  <br />
                </p>
                <a onClick={handleShow} className='dwld btn border text-light fw-bolder' >Read More <i class="fa-solid fa-arrow-right ms-1"></i> </a>
                

              {/* offcanvas */}
              <Offcanvas style={{ backgroundImage: `url('https://i.makeagif.com/media/1-17-2017/Sg6qqA.gif')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} className='offcanvas text-light' show={show} onHide={handleClose}>
                <Offcanvas.Header className='bg-light pt-2 pb-2' closeButton>
                  <Offcanvas.Title className='text-dark'>About me</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  I worked significant
                  projects consists of Residential, Commercial, Industrial, Medical,
                  Pharmaceutical, Public projects and Data Center projects; some
                  majors are Adani Connex Data Centers, Lulu Mall (Trivandrum &
                  Palakkad), Collins Aerospace etc. i'm capable to leverage his
                  technical skills and hands on experience in a dynamic engineering
                  environment to contribute to innovative and efficient project
                  execution. Along with these he is a Certified Diploma holder in Revit
                  MEP from IACET certified institution and an Autodesk AutoCAD
                  certified user. I believes that i can perform any work assigned to
                  me with full efficiency and will give his best to the organization
                </Offcanvas.Body>
              </Offcanvas>
            </div>

            <div className="col-lg-6 " >
                <img data-aos="fade-left"
                        data-aos-offset="300" data-aos-duration="1000" className="aboutimage" src="https://tifin.com/wp-content/uploads/TIFIN-BRAIN-1000PX.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* skills */}
      <div style={{backgroundColor:'black'}}>
        <h4 className='text-center text-light  pb-4' style={{ fontStyle: ' "Eczar", serif' }}>SKILL<span className='text-warning'> SET</span></h4>
       
                      <div data-aos="fade-down" 
                        data-aos-offset="300" data-aos-duration="1000"
                        data-aos-easing="ease-in-sine" className='d-flex justify-content-evenly'>
                        <img className='skillsimg' src="https://seeklogo.com/images/A/autocad-logo-69326D7728-seeklogo.com.png" alt="" />
                        <img className='skillsimg' src="https://www.seiler-ds.com/wp-content/uploads/sites/11/2023/07/autodesk_revit-logo-1.png" alt="" />
                        <img className='skillsimg' src="https://images.carriercms.com/image/upload/w_300,c_lfill,q_auto,f_auto/v1668608145/carrier/commercial-hvac/logos/hapv6-logo.png" alt="" />
                        <img className='skillsimg' src="https://play-lh.googleusercontent.com/h482y0tJBO5m49H6qULIK8lUOsOUIqKeCXI8ZSvfCPEuNzAiS-4L_SolHfhGPfh5EQ" alt="" />
                      </div>
                      <div data-aos="fade-down"
                        data-aos-offset="300" data-aos-duration="1000"
                        data-aos-easing="ease-in-sine" className='d-flex justify-content-evenly mt-5'>
                        <img className='skillsimg1' src="https://i.ytimg.com/vi/77EImR3IHfY/maxresdefault.jpg" alt="" />
                        <img className='skillsimg' src="https://downloadlynet.ir/wp-content/uploads/2020/03/Bluebeam-Revu.png" alt="" />
      
                        <img className='skillsimg' src="https://downloadlynet.ir/wp-content/uploads/2020/03/AGi32.png" alt="" />
                      </div>
                   
  
       
      </div>


      {/* contact info */}
      <div id='contactme' className='ContainerHome container'>
        <div className="row">
          <div className=" col-lg-6">
            <p className='contactPara fw-bolder'>
              Let's work
              together
            </p>
            <h6>Mail</h6>
            <p>sreerag749@gmail.com</p>
            <h6>Address</h6>
            <p>sreeragm,</p>
            <h6>Phone</h6>
            <p>2524638004</p>
          </div>
          <div className="col-lg-6">
            <form className="mt-4  text-dark mb-5" >
              <input type="text" className='namee border' placeholder='Your Name' name='your_name' />
              <input type="email" className='email border' placeholder='Your Email' name='your_email' />
              <textarea name="message" className='msg border' placeholder='Your Message' id="" />
              <button type="submit" value="Send" className='btn ms-2 mt-3 text-dark fw-bolder ps-5 pe-5 bg-warning text-center'>Submit</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default Home