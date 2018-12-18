import React from 'react';
import 'bulma/css/bulma.css';
import 'bulma-divider';
import Fade from 'react-reveal/Fade';
import IndividualBlogs from './IndividualBlogs';

const AllBlogs = () => {
  return (
    <section className='section is-centered'>
      <Fade left>
      <IndividualBlogs
        blogLink = 'https://medium.com/@acodercalledcole/settled-in-old-ways-try-react-render-props-for-something-different-e30e8b06343a'
        date = 'July 28, 2018'
        blogTitle = 'Settled in old ways. Try React render.props for something different'
        blogDescription = 'Get a quick look at <code>render.props</code> and their benefits. Like cross-cutting concerns.'
      />
      </Fade>
      <div className='is-full is-divider' style={{'marginTop':'100px'}} />
      <Fade right>
      <IndividualBlogs
        blogLink = 'https://medium.com/@acodercalledcole/redux-frustration-lets-talk-e11582ed5708'
        date = 'July 22, 2018'
        blogTitle = "Redux Frustration - Let's talk"
        blogDescription = 'Quick run down of Redux. Some simple examples of properly returning app state.' 
      />
      </Fade>
      <div className='column is-full is-divider' style={{'marginTop':'100px'}} />
      <Fade left>
      <IndividualBlogs
        blogLink = 'https://itnext.io/remove-state-from-a-form-component-and-allow-redux-form-to-handle-it-b702fe75b7b5'
        date = 'July 10, 2018'
        blogTitle = 'Remove state from a Form component and allow Redux-Form to handle it'
        blogDescription = 'Remove state form React form component and allow Redux-Form to efficiently handle it.' 
      />
      </Fade>
      <div className='column is-full is-divider' style={{'marginTop':'100px'}} />
      <Fade right>
      <IndividualBlogs
        blogLink = 'https://itnext.io/access-responsivevoice-js-in-react-app-without-a-package-a062b8d92950'
        date = 'July 1, 2018'
        blogTitle = 'Access ResponsiveVoice.js in React app without a package'
        blogDescription = 'ResponsiveVoice is a great way to read back text for an app without including a npm package.' 
      />
      </Fade>
    </section>
  )
}

export default AllBlogs;