import { useState } from 'react'



import Navbar from './components/static/navbar/Navbar'
import Hero from './components/pages/hero/Hero'
import About from './components/pages/about/About'
import Car from './components/pages/car/Car'
import Value from './components/pages/value/Value'
import Testimony from './components/pages/testimony/Testimony'
import Brief from './components/home/brief/Brief'
import Qualities from './components/home/qualities/Qualities'
import Cartwo from './components/home/carTwo/Cartwo'
import Footer from './components/static/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
 <div>
<Navbar />
<Hero />
<Brief />
<About />
<Car />
<Value />
<Testimony />
<Qualities />
<Cartwo />

<Footer />

 </div>
  )
}

export default App
