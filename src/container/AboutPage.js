import React from 'react';
import 'bulma/css/bulma.css';
import '../css/AboutPage.css';
import Fade from 'react-reveal/Fade';
import NavbarAndMenu from '../components/NavbarAndMenu';
import Profile from '../images/Profile.jpg';
import AboutDescription from '../components/AboutDescription';
import ContactInfoForm from '../components/ContactInfoForm';
import SnapToTopOfPage from '../components/SnapToTopOfPage';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <NavbarAndMenu />
      <div className='main-about'>
        <Fade right>
          <section 
            className='section is-paddingless profilePic' 
            style={{'backgroundImage':`url(${Profile})`}}
          />
        </Fade>
      </div>
      <AboutDescription />
      <ContactInfoForm />
      <SnapToTopOfPage />
      <Footer />
    </>
  )
}

export default AboutPage;