import React from 'react'
import './Testimony.css'

const Testimony = () => {
    const scrollToSection = (testimony) => {
        const element = document.getElementById(testimony);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

  return (
    <div id=''>

<div id='testimony' class="flt" >    
<h2>Hear from our incredible customer</h2>
<div class="testimony">
<div class="mony">
    <p>FBG Autos and Express Services exceeded my expectations. I got the perfect vehicle from them. The entire process was smooth, and their customer service was outstanding. 
        Highly recommended!</p>
        <hr />
        <h5> Olakunle A., Car Buyer</h5>
</div>


<div class="mony"><p>Working with FBG Autos and Express Services has been a game-changer for our business. Their timely deliveries and exceptional service make them our go-to logistics partner.</p>
    <hr />
<h5>Sarah K., Business Owner</h5> </div>


<div class="mony"><p>FBG Autoes and Express Services offers a seamless experience from start to finish. Their professionalism and attention to detail are unmatched.
</p>
<hr />
<h5 class="mat">Matthew E., Long-term Client</h5>
</div>

</div>
</div>






    </div>
  )
}

export default Testimony