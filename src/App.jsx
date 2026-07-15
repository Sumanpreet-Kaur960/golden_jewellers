import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Featured from './components/Featured/Featured'
import WhyChooseUs from './components/WhyChooseUs/WhyChoose'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <WhyChooseUs />
      <Contact />
    </div>
  )
}

export default App