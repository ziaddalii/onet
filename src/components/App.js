import React, { Component } from 'react'
import app from "../styles/app.css"
import hero from '../styles/hero.css'
import cardsTypes from '../styles/cardsTypes.css'

import howWorks from '../styles/howWorks.css'

import commonCountries from '../styles/commonCountries.css'
import whyWe from '../styles/whyWe.css'
import clientsFeedback from '../styles/clientsFeedback.css'
import footer from '../styles/footer.css'
import globalCards from '../styles/globalCards.css'

import Navbar from './Navbar'
import Hero from './Hero'
import HowWorks from './HowWorks'
import WhyWe from './WhyWe'
import ClientsFeedback from './ClientsFeedback'
import Footer from './Footer'
import CardsTypes from './CardsTypes';
import GlobalCards from './GlobalCards';
import "../styles/slick.css"; 
import "../styles/slickTheme.css"; 
export default class extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Hero/>
        <CardsTypes/>
        <HowWorks/>
        <WhyWe/>
        <ClientsFeedback/>
        <Footer/>
      </div>
    )
  }
}
