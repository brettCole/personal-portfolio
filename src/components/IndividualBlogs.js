import React from 'react';
import 'bulma/css/bulma.css';
import 'bulma-divider';
import '../css/BlogDetails.css';

const IndividualBlogs = (props) => {
  return (
    <div className='container is-medium individual-blog-container'>
      {/* <p className='has-text-weight-light has-text-grey-light'>
        {props.date}
      </p> */}
      <h3 className='title is-3'>
        <a href={props.blogLink}>
          {props.blogTitle}
        </a>
      </h3>
      <div className='columns is-mobile is-centered'>
        <div className='column is-one-fifth is-divider is-success' />
      </div>
      <h4 className='subtitle is-4 has-text-weight-light has-text-grey'>
        {props.blogDescription}
      </h4>
    </div>
  )
}

export default IndividualBlogs;