import React from 'react'
import About from '../pages/About'
import Hero from '../pages/Hero'
import Skills from '../pages/Skills'
import Portfolios from '../pages/Portfolios'
import Header from '../pages/Header'
import Contact from './Contact'
import ScrollToTop from './ScrollToTop'
import Portfolio2 from './Portfolio2'

const Homepage:React.FC = () => {
  return (
    <div id='home'>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Portfolios />
        <Portfolio2 />
        <Contact />
        <ScrollToTop/>

    </div>
  )
}

export default Homepage
