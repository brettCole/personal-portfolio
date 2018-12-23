import React from 'react';
import 'bulma/css/bulma.css';
import '../css/Projects.css';
import Fade from 'react-reveal/Fade';
// imported components
import IndividualProjects from './IndividualProjects';
import CustomerProject from './CustomerProject';
// images
import Jeopardy from '../images/JeopardyApp.png';
import LetsGetCookin from '../images/LetsGetCookin.png';
import Adios from '../images/Adios.png';
import SkiResortGem from '../images/SkiResortGem.png';

const Projects = () => {
  return (
    <section 
      className='section content has-text-centered is-marginless project-section'
      id='projects'  
    >
      <Fade left>
        <h1 className='title is-1 has-text-white'>Projects</h1>
      </Fade>
      <Fade right>
        <h4 className='subtitle is-4 has-text-white has-text-weight-light'>Currently, I am working on a site for a smaller automotive business that is local to me. Really enjoying the experience.</h4>
      </Fade>
      <Fade left>
        <h4 className='subtitle is-4 has-text-white has-text-weight-light'>Here are some recent projects I have completed.</h4>
      </Fade>
      <Fade right>
        <div className='columns is-mobile is-multiline is-variable is-3 is-centered projects-container'>
          <IndividualProjects
            title = 'Portfolio Site'
            link = 'https://github.com/brettCole/personal-portfolio'
            description = "Personal portfolio to display personal work. Some new tools and adding some more soon."
            techStack = {['React', 'Bulma framework', 'Node.js', 'Express.js']}
          />
          <IndividualProjects
            title = 'Jeopardy'
            link = 'https://github.com/brettCole/Jeopardy'
            backgroundImage = {Jeopardy}
            description = 'Similar to Jeopardy app. Set up for three teams to go head to head in full rounds of questions with a final Jeopardy round. Great for family and friends.'
            techStack = {['React', 'Redux', 'ResponsiveVoice.js', 'jService Gem', 'Ruby on Rails']}
          />
          <IndividualProjects
            title = 'Adios'
            link = 'https://github.com/brettCole/adios2'
            backgroundImage = {Adios}
            description = "Vacation rental app. Used Faraday Gem to access Homeaway's API for listings. Then used React and Redux to display rentals. Also has checklist creation for users."
            techStack = {['React', 'Redux', 'HomeAway API', 'Faraday Gem', 'Reactstrap', 'Ruby on Rails']}
          />
          <IndividualProjects
            title = 'Lets Get Cookin'
            link = 'https://github.com/brettCole/Lets-get-cookin'
            backgroundImage = {LetsGetCookin}
            description = "Ruby on Rails app to add favorite recipes. Plus displays the details of each dish. Simple layout."
            techStack = {['Ruby', 'Ruby on Rails']}
          />
          <IndividualProjects
            title = 'Top Ski Resort Ruby Gem'
            link = 'https://github.com/brettCole/Top_Ranked_Ski_Resorts-cli-gem'
            backgroundImage = {SkiResortGem}
            description = "Top ranked ski resorts across the United States. Displays all of the details of each chosen mountain from height to number of lifts."
            techStack = {['Ruby']}
          />
        </div>
      </Fade>
      <Fade left>
        <h4 className='subtitle is-4 has-text-white has-text-weight-light customer-project-header'>Lets make your great idea my next project!</h4>
      </Fade>
      <Fade right>
        <div className='columns is-mobile is-centered customer-project-div'>
          <CustomerProject />
        </div>
      </Fade>
    </section>
  )
}

export default Projects;