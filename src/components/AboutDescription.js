import React from 'react';
import 'bulma/css/bulma.css';
import '../css/AboutPage.css';
import Fade from 'react-reveal/Fade';

const AboutDescription = () => {
  return (
    <section className='container' style={{'marginBottom':'50px'}}>
      <Fade left>
      <h1 className='title is-1 is-centered headerTitle' style={{'fontFamily':'Norwester'}}>Full Stack Developer</h1>
      </Fade>
      <Fade right>
        <div className='columns is-multiline is-centered' style={{'fontFamily':'Montserrat', 'fontWeight':'200'}}>
          <p className='column is-three-quarters-tablet has-text-justified'>
            I am a developer who is always looking for the next coding adventure. I have always enjoyed working with computers. I don't like to limit myself by saying I just program on the front end or back end. I would much rather say I try to write code wherever I am most needed in that moment.
          </p>
          <p className='column is-three-quarters-tablet has-text-justified'>
            When I'm not programming, I love to work on cars and snowboarding. I haven't had the chance, but I would love to head west and try their resorts. I love being a developer. But I love being a husband and father more. If it wasn't for my wife none of this would even be possible.
          </p>
          <p className='column is-three-quarters-tablet has-text-justified' style={{'verticalAlign':'top'}}>
            Here is a recap of my <h3 className='subtitle is-3 is-marginless is-paddingless is-inline' style={{'verticalAlign':'-10%', 'lineHeight':'1rem'}}>
              <a href='/#projects' className='has-text-success is-paddingless' style={{}}>
                skills
              </a>
            </h3>. Instead I would rather give out free copies of my <h3 className='subtitle is-3 is-marginless is-paddingless is-inline' style={{'verticalAlign':'-10%', 'lineHeight':'1rem'}}>
              <a href='https://learn.co/brettCole/resume' className='has-text-success'>
                resume
              </a>
            </h3>. Also, check out my <h3 className='subtitle is-3 is-marginless is-paddingless is-inline' style={{'verticalAlign':'-10%', 'lineHeight':'1rem'}}>
              <a href='/blog' className='has-text-success'>
                blog
              </a>
            </h3> if you wonna know what I've been thinking. Shoot me a message with your ideas and lets see if we can make things happen.
          </p>
        </div>
      </Fade>
    </section>
  )
}

export default AboutDescription;