import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Portfolios from '../components/Portfolios'
import Portfolio2 from '../components/Portfolio2'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'
import Form from '../components/Form'

const LandingPage:React.FC = () => {
  return (
    <div>
      {/* <Particlesbg /> */}
      <Hero />
      <About />
      <Skills />
      <Portfolios />
      <Portfolio2 />
      <Contact /> 
      <Form />
      <ScrollToTop />
    </div>
  )
}

export default LandingPage
