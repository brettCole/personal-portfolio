import React from 'react';
import 'bulma/css/bulma.css';
import '../css/BlogDetails.css';
import BlogProfile from '../images/BlogProfilePic.jpg';

const BlogProfilePic = () => {
  return (
    <div className='columns is-mobile is-centered' id='blog-profile-pic'>
      <figure className='image is-128x128'>
        <img 
          src={BlogProfile} 
          className='box is-paddingless' 
          alt='profile pic' 
        />
      </figure>
    </div>
  )
}

export default BlogProfilePic;