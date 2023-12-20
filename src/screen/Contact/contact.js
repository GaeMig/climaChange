import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import "../Contact/contact.css"
import Inst from "../../assets/img/socialIcone/instagram.png"
import Face from "../../assets/img/socialIcone/facebook.png"
import Git from "../../assets/img/socialIcone/git.png"
import Linkedin from "../../assets/img/socialIcone/linkedin.png"
import { Link } from 'react-router-dom'
import Footer from "../../components/Footer/Footer"

function contact() {
  return (
    <div>
<Navbar></Navbar>
<ContactSection></ContactSection>

<Footer></Footer>
    </div>
  )
}

export default contact


export const ContactSection = () => {
  return(
    <div>
     <div class='grid-container-contact'>
  <div class='gridContact'>
    {/*create forms to be contacted */}
    <div class='grid-item-contact-text'>
    <h3 className='titleText'>Contact Me.</h3>
    <p className='textForm'>Through this form you can contact me for any type of information, 
      or click on the icons and contact me via my social profiles.</p>

      <div className='icon'>
        <Link to={"https://www.instagram.com/gae_mig_/"} target='_blank'>
       <img src={Inst} alt='icon Instagram'className='iconSocial Instagram'></img>
       </Link>
       <Link to={"https://it-it.facebook.com/gaetano.migliucci/"} target='_blank'>
       <img src={Face} alt='icon Facebook'className='iconSocial '></img>
       </Link>
       <Link to={"https://it.linkedin.com/in/gaetano-migliucci-7430951a1"} target='_blank'>
       <img src={Linkedin} alt='icon Linkedin'className='iconSocial '></img>
       </Link>
       <Link to={"https://github.com/GaeMig"} target='_blank'>
       <img src={Git} alt='icon GitHub'className='iconSocial '></img>
       </Link>

      </div>
    </div>
    <div class='grid-item-contact-form'>
      <form
       action="https://formspree.io/f/mayrwybj"
       method="POST"
      >
      <label for="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <input type="submit" value="Send" className='button'></input>
      </form>
    </div>
      <div className='containerEmpty'></div>
  </div>
</div>

    </div>
  )
}