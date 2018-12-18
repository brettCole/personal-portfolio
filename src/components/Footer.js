import React from 'react';
import 'bulma/css/bulma.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer is-paddingless'>
      <div className='content has-text-centered' style={{'marginBottom':'0'}}>
        <div className='columns is-centered is-mobile'>
          <a className='column is-narrow' href='https://github.com/brettCole'>
            <FontAwesomeIcon icon={faGithub} className='fa-2x has-text-success' />
          </a>
          <a className='column is-narrow' href='https://medium.com/@acodercalledcole'>
            <FontAwesomeIcon icon={faMedium} className='fa-2x has-text-success' />
          </a>
          <a className='column is-narrow' href='https://www.linkedin.com/in/brett-cole-ba86b297/'>
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x has-text-success' />
          </a>
        </div>
        <div className='content columns'>
          <p className='column' style={{'fontFamily':'Montserrat', 'fontWeight':'200'}}>acodercalledcole@gmail.com</p>
          <h5 className='subtitle is-5 column' style={{'fontFamily':'Norwester'}}>Made with Blood, Sweat and Tears</h5>
          <p className='column' style={{'fontFamily':'Montserrat', 'fontWeight':'200'}}>&copy; 2018</p>
        </div>
      </div>
      <div style={{'fontFamily':'Montserrat', 'fontWeight':'300'}}>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
      </div>
    </footer>
  )
}

export default Footer;