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
      <div style={{'transform':'translateY(-62px)'}}>
        <Fade right>
          <section 
            className='section is-paddingless profilePic' 
            style={{'backgroundImage':`url(${Profile})`, 'backgroundRepeat':'no-repeat', 'backgroundSize':'contain', 'backgroundPosition':'center top'}}>
          </section>
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