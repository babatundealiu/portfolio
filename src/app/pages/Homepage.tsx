import React from 'react'
import About from '../pages/About'
import Hero from '../pages/Hero'
import Skills from '../pages/Skills'
import Portfolios from '../pages/Portfolios'
import Header from '../pages/Header'
import Contact from './Contact'

const Homepage:React.FC = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Portfolios />
        <Contact />

    </div>
  )
}

export default Homepage
