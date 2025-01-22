import React from 'react'
import  './Navbar.css'
import FBG_Autos from '../../../assets/FBG_Autos.svg'
const Navbar = () => {
  return (
    <div>
    
    <nav className="header">

<div className="logo"> 
<img src={FBG_Autos} alt="" />
</div>

<div className="navlinks">
<a href="#home">Home</a>
<a href="#about">About us</a>
<a href="#services">Services</a>
<a href="#contact">Contact</a>
<a href="#testimony"> Testimony</a>
</div>


<div className="nav-connect"> Connect With us  </div>



    </nav>

    </div>
  )
}

export default Navbar