import React from 'react';
import 'bulma/css/bulma.css';
import '../css/AboutPage.css';
import Fade from 'react-reveal/Fade';

const AboutDescription = () => {
  return (
    <section className='container about-description-section'>
      <Fade left>
        <h1 className='title is-1 is-centered headerTitle'>Full Stack Developer</h1>
      </Fade>
      <Fade right>
        <div className='columns is-multiline is-centered'>
          <p className='column is-three-quarters-tablet has-text-justified'>
            I am a developer who is constantly looking for my next coding adventure. I have always had a passion for developing code. I dont't like to box myself in by saying I work strictly on the front end or only on the back end. I prefer knowing how to write the code that is necessary in that moment.
          </p>
          <p className='column is-three-quarters-tablet has-text-justified'>
            I love being a Full-Stack Developer, but I love being a husband and father more. If it wasn't for my wife, all of this would never of happened. They keep me motivated.
          </p>
          <p className='column is-three-quarters-tablet has-text-justified'>
            When I am not programming, I love to work on cars and snowboard. Hopefully some day I'll get the chance to head west and try some mountains out there.
          </p>
          <p className='column is-three-quarters-tablet has-text-justified'>
            Anyway, back to programming. Here is a quick recap of my <h3 className='subtitle is-3 is-marginless is-paddingless is-inline'>
              <a href='/#skills' className='has-text-success is-paddingless'>
                skills
              </a>
            </h3>. Here is my <h3 className='subtitle is-3 is-marginless is-paddingless is-inline'>
              <a href='https://learn.co/brettCole/resume' className='has-text-success'>
                resume
              </a>
            </h3> if you would like to take a look at some of my previous work. Also, check out my <h3 className='subtitle is-3 is-marginless is-paddingless is-inline'>
              <a href='/blog' className='has-text-success'>
                blog
              </a>
            </h3> if you wonna know what I've been thinking. Shoot me a message with your ideas and I look forward to creating something great with you!
          </p>
        </div>
      </Fade>
    </section>
  )
}

export default AboutDescription;