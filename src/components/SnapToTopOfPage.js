import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons/faArrowCircleUp.js';

const myBtn = {
  display:'none',
  position:'fixed',
  bottom:'20px',
  right:'40px',
  // 'zIndex':'99',
  border:'none',
  outline:'none',
  cursor:'pointer',
  color:'inherit',
  padding:'0',
  'backgroundColor':'transparent'
}

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
    <button className='icon is-large' onClick={topFunction} id='myBtn' style={myBtn} title='Go to top'>
      <FontAwesomeIcon icon={faArrowCircleUp} className='fa-4x has-text-success' />
    </button>
  )
}

export default SnapToTopOfPage;