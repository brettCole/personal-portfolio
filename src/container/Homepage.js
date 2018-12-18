import React from 'react';
import NavbarAndMenu from '../components/NavbarAndMenu';
import WelcomingHeader from '../components/WelcomingHeader';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import ContactInfoForm from '../components/ContactInfoForm';
import SnapToTopOfPage from '../components/SnapToTopOfPage';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <>
      <NavbarAndMenu />
      <WelcomingHeader />
      <Projects />
      <Skills />
      <ContactInfoForm />
      <SnapToTopOfPage />
      <Footer />
    </>
  )
}

export default Homepage;