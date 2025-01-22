import React from 'react'
import './About.css'
import checkone from '../../../assets/checkone.svg'
import checktwo from '../../../assets/checktwo.svg'

const About
 = () => {
  return (
    <div >

<div id='services' className='herosec'>
<h1 >Why Choose Us?</h1>

<div className="wcu"> 
<div className="um"> 
    <img className="tick" src={checkone} alt="" />
<p className="gra"> <b>Unmatched Reliability: </b>   
Our logistics network is built on precision and dependability, 
ensuring your goods arrive at their destination on time, every time. 
We understand the importance of punctuality in logistics, 
and we go the extra mile to meet and exceed your expectations.</p></div>

<div className="ws">
    
<img className="tick" src={checktwo} alt="" />    

<p className="gra1"> <b>Wide Selection of Vehicles:</b>  Whether you are looking for a reliable car, a powerful truck, or a specialized vehicle, our collection has something to suit every need and preference. Each vehicle is handpicked for quality and performance, ensuring you drive away with only the best.</p></div>
</div>
<div className="cc">
<img className="tick" src={checkone} alt="" />

<p className="gra" >   <b>Customer-Centric Approach:</b>  
At FBG Autos and Express Services, your satisfaction is our top priority. We offer personalized service, tailored to meet your unique needs, and a seamless experience from start to finish. Our team is committed to making your journey with us smooth and rewarding.</p></div>

</div>
    </div>
  )
}

export default About
