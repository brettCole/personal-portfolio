import React from 'react';
import 'bulma/css/bulma.css';
import Fade from 'react-reveal/Fade';

import IndividualProjects from './IndividualProjects';
import CustomerProject from './CustomerProject';
import Jeopardy from '../images/JeopardyApp.png';
import LetsGetCookin from '../images/LetsGetCookin.png';
import Adios from '../images/Adios.png';
import SkiResortGem from '../images/SkiResortGem.png';

const Projects = () => {
  return (
    <section 
      className='section content has-text-centered is-marginless' 
      style={{
        'background':'-webkit-linear-gradient(to bottom, #260042 18%, #4B0082 79%, #6F339B)', 'background':'linear-gradient(to bottom, #260042 18%, #4B0082 79%, #6F339B)', 
        'WebkitClipPath':'polygon(0 4%, 100% 0, 100% calc(100% - 5vw), 0 100%)',
        'clipPath':'polygon(0 2%, 100% 0, 100% calc(100% - 40px), 0 100%)'
      }}
      id='projects'  
    >
      <Fade left>
        <h1 className='title is-1 has-text-white' style={{'marginBottom':'5rem', 'fontFamily':'Norwester'}}>Projects</h1>
      </Fade>
      <Fade right>
        <h4 className='subtitle is-4 has-text-white has-text-weight-light' style={{'fontFamily':'Montserrat', 'fontWeight':'100'}}>Currently, I am working on a site for a smaller automotive business that is local to me. Really enjoying the experience.</h4>
      </Fade>
      <Fade left>
        <h4 className='subtitle is-4 has-text-white has-text-weight-light' style={{'fontFamily':'Montserrat', 'fontWeight':'100'}}>Here are some recent projects I have completed.</h4>
      </Fade>
      <Fade right>
        <div className='columns is-mobile is-multiline is-variable is-3 is-centered' style={{'position':'relative'}}>
          <IndividualProjects
            title = 'Portfolio Site'
            description = "Personal portfolio site to display my personal work. Took this opportunity to work with tools I haven't gotten the chance to."
            techStack = {['React', 'Gatsby.js', 'Bulma']}
          />
          <IndividualProjects
            title = 'Jeopardy'
            backgroundImage = {Jeopardy}
            description = 'Jeopardy like app to have fun with family and friends. Set up for three teams to go head to head in full rounds of questions, with a final Jeopardy round.'
            techStack = {['React', 'Redux', 'ResponsiveVoice.js', 'jService', 'Ruby on Rails']}
          />
          <IndividualProjects
            title = 'Adios'
            backgroundImage = {Adios}
            description = "Vacation rental app. Accessed Homeaway's API for listings. Then used React and Redux to display rentals."
            techStack = {['React', 'Redux', 'HomeAway API', 'Faraday Gem', 'Ruby', 'Ruby on Rails']}
          />
          <IndividualProjects
            title = 'Lets Get Cookin'
            backgroundImage = {LetsGetCookin}
            description = "Simple Sinatra app where you can add and rate Scotch's."
            techStack = {['Ruby', 'Ruby on Rails']}
          />
          <IndividualProjects
            title = 'Top Ski Resort Ruby Gem'
            backgroundImage = {SkiResortGem}
            description = "Personal portfolio site to display my personal work. Took this opportunity to work with tools I haven't gotten the chance to."
            techStack = {['React', 'Gatsby.js', 'Bulma']}
          />
        </div>
      </Fade>
      <Fade left>
        <h4 className='subtitle is-4 has-text-white has-text-weight-light' style={{'fontFamily':'Montserrat', 'fontWeight':'100', 'marginTop':'50px'}}>Lets make your great idea my next project!</h4>
      </Fade>
      <Fade right>
        <div className='columns is-mobile is-centered' style={{'marginBottom':'50px'}}>
          <CustomerProject />
        </div>
      </Fade>
    </section>
  )
}

export default Projects;