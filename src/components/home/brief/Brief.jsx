import React from 'react'
import './Brief.css'
import rafiki from '../../../assets/rafiki.svg'
import download5 from '../../../assets/download5.png'
import Frame59736 from '../../../assets/Frame59736.svg'






const Brief = () => {
  return (
    <div >

<div id='about' className="who">

<div className="we"> <h1>Who We Are</h1> 
<p>We specialize in providing top-tier <b>logistics solutions and premium auto sales,</b> serving as your trusted partner for all transportation and vehicle needs. Whether you're looking for reliable, on-time delivery services or seeking a quality vehicle, FBG Autoes offers a seamless experience tailored to meet your specific requirements. </p>

<button type="button" className="gstart1">Get started</button>
<button type="button" className="learnm1">Learn More</button>
</div>

<div > <img className="are" src= {rafiki} alt="" /> </div>

</div>

<div className="rocket">
<div className="shift">
    

    <div>
        <img className="irkt" src= {download5} alt="" />
    </div>


    <div className=" rkt">

        <div className="mission"> <div>
            <img src={Frame59736} alt="" /> 
        </div>
<div>
        <h2>Mission Statement</h2>
<p>Our mission is to deliver reliable and efficient logistics solutions while offering a wide selection of premium vehicles. We are committed to exceeding customer expectations through exceptional service, integrity, and a focus on building long-term relationships.</p>
</div>    
        </div>

        <div className="vision">

<div>
    <img src={Frame59736} alt="" />
</div>

<div>
    <h2>Vision Statement</h2>
<p>Our vision is to become the leading provider of innovative logistics and automotive services, setting the standard for excellence and trust in the industry. We aim to expand our reach and continuously improve, making FBG Autoes and Express Services the first choice for customers nationwide.</p>
</div>            
        </div>

    </div>
</div>





    </div>
    </div>
  )
}

export default Brief