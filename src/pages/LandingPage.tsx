import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolios from '../components/Portfolios'
import Portfolio2 from '../components/Portfolio2'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'

const LandingPage:React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Portfolios />
      <Portfolio2 />
      <Contact /> 
      <ScrollToTop />
    </div>
  )
}

export default LandingPage
