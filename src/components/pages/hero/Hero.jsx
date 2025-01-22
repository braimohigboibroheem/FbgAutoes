import React from 'react'
import './Hero.css'
import image from '../../../assets/image.svg'

const Hero = () => {
  return (
    <div >
  <img className='moto' src={image} alt="" />
<div id='home' className="intro">
  <div className='hip'>   
<h1>  Delivering Excellence  in Logistics and Auto Sales</h1>

    <p>At FBG Autos and Express Services, we deliver efficient logistics and premium auto sales. Whether you need fast delivery or a quality vehicle, we have got you covered.</p>
    </div>
<div className='flxb'> 
    <button type="button" className="gstart">Get started</button>
    <button type="button" className="learnm">Learn More</button>
    </div>
    </div>


    </div>
  )
}

export default Hero