import React from 'react'
import {BsLinkedin , BsFacebook ,BsGithub} from 'react-icons/bs'
const Header_socials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/h%C3%A9di-ayedi-2258a11bb/" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com/HediAyedi" target="_blank"><BsGithub></BsGithub></a>
        <a href="https://www.facebook.com/hedi.ayedi.3348/" target="_blank"><BsFacebook></BsFacebook></a>

    </div>
  )
}

export default Header_socials