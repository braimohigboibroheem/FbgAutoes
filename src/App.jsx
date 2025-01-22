import { useState } from 'react'



import Navbar from './components/static/navbar/navbar'
import Hero from './components/pages/hero/hero'
import About from './components/pages/about/about'
import Car from './components/pages/car/Car'
import Value from './components/pages/value/Value'
import Testimony from './components/pages/testimony/Testimony'
import Brief from './components/home/Brief/Brief'
import Qualities from './components/home/qualities/qualities'
import Cartwo from './components/home/carTwo/Cartwo'
import Footer from './components/static/footer/footer'

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
