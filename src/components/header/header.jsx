import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.jpeg'
import menobg from '../../assets/menobg.png'
import Header_socials from './Header_socials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'am</h5>
        <h1>Hedi Ayedi</h1>
        <h5 className="text-light" >Full Stack Developer</h5>
        <h5 className="text-light">&</h5>
        <h5 className="text-light">Data Scientist</h5>
        <CTA></CTA>
        <Header_socials/>

        <div className="me">
          <img src={menobg} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header