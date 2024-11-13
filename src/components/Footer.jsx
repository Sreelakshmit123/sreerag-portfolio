import React from 'react'

function Footer() {
  return (
    <>
        <div style={{backgroundColor:'black', paddingTop:'50px', paddingBottom:'30px'}} className='contact'>
          <div className='d-flex '>
            <div class="icon">
              <a href="https://www.linkedin.com/in/sreeragt/" target="_blank"><i class="fa-brands fa-linkedin-in brand"></i></a>
            </div>
            <div class="icon">
              <a href="https://wa.me/qr/RT5AOGUYGRHMF1" target="_blank"><i class="fa-brands fa-whatsapp brand"></i></a>
            </div>
            <div class="icon">
              <a href="https://wa.me/qr/RT5AOGUYGRHMF1" target="_blank"><i class="fa-brands fa-instagram brand"></i></a>
            </div>
            <div class="icon">
              <a href="https://wa.me/qr/RT5AOGUYGRHMF1" target="_blank"><i class="fa-brands fa-facebook brand"></i></a>
            </div>
          </div>
        </div>
        <div className="up-arrow icon">
        <a href="#navbar"><i class="fa-solid fa-angle-up brand"></i></a>
      </div>
    </>
  )
}

export default Footer