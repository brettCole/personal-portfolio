import React from 'react';
import { ReactComponent as Logo } from '../images/computer.svg';

const CustomerProject = () => {
  return (
    <div className='card box column is-two-thirds-mobile is-one-quarter-tablet has-text-centered'>
      <div className='card-content'>
        <div className='content'>
          <p style={{'fontFamily':'Montserrat'}}>
            Your awesome project here!
          </p>
        </div>
        <a href='#contact-form'>
          <Logo style={{width:'10em'}}/>
        </a>
      </div>
    </div>
  )
}

export default CustomerProject;