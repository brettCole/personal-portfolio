import React from 'react';
import 'bulma/css/bulma.css';
import Profile from '../images/Profile.jpg';

const ProfilePic = () => {
  return (
    <section 
      className='section is-large' 
      style={{'paddingLeft':'0px', 'paddingRight':'0px', '-webkit-transform': 'translate(4px)',
	      '-moz-transform': 'translateY(-50px)',
	      '-ms-transform': 'translateY(-50px)',
	      '-o-transform': 'translateY(-50px)',
	      transform: 'translateY(-50px)', 'backgroundImage':`url(${Profile})`, 'backgroundRepeat':'no-repeat', 'backgroundSize':'contain', 'backgroundPosition':'center'}}
    >
    
    </section>
  )
}

export default ProfilePic;