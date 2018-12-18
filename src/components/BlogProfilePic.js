import React from 'react';
import 'bulma/css/bulma.css';
import BlogProfile from '../images/BlogProfilePic.jpg';

const BlogProfilePic = () => {
  return (
    <div className='columns is-mobile is-centered' style={{'marginTop':'50px', 'marginBottom':'100px'}}>
      <figure className='image is-128x128'
        /* style={{'background':`url(${BlogProfile})`, 'backgroundRepeat':'no-repeat', 'backgroundSize':'100% 100%'}} */
      >
        <img src={BlogProfile} className='box is-paddingless' alt='profile pic' />
      </figure>
    </div>
  )
}

export default BlogProfilePic;