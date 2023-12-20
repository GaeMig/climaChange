import React from 'react'
import Section from "../../components/Section/Section"
import SectionHome from "../../components/SectionHome/SectionHome.js"
import "../Home/Home.css"
import Footer from '../../components/Footer/Footer.js'
import Navbar from '../../components/Navbar/navbar.js'

const Home = () => {
  return<>
  <Navbar></Navbar>
  <Section></Section>
  <SectionHome></SectionHome>
  <Footer></Footer>
  </>
}

export default Home
