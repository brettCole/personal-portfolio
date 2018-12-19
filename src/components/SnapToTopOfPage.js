import React from 'react';
import 'bulma/css/bulma.css';
import '../css/WelcomingHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons/faArrowCircleUp.js';

window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById('myBtn').style.display = 'block';
  } else {
    document.getElementById('myBtn').style.display = 'none';
  }
}

const topFunction = () => {
  window.scrollTo(0, 0);
}

const SnapToTopOfPage = () => {
  return (
    <button className='icon is-large snap-button' onClick={topFunction} id='myBtn' title='Go to top'>
      <FontAwesomeIcon icon={faArrowCircleUp} className='fa-4x has-text-success' />
    </button>
  )
}

export default SnapToTopOfPage;