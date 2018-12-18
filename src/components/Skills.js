import React from 'react';
import 'bulma/css/bulma.css';
import '../css/SkillBarGraph.css';
import Fade from 'react-reveal/Fade';
import SkillBarGraph from './SkillBarGraph';

const Skills = () => {
  return (
    <section 
      className='section content has-text-centered clipBackground'
      style={{
        'background':'-webkit-linear-gradient(to bottom, #0a3e1c 18%, #157d39 79%, #1fbc56)', 'background':'linear-gradient(to bottom, #0a3e1c 18%, #157d39 79%, #1fbc56)'
      }}
    >
      <Fade left>
        <h1 className='title is-1 has-text-white' style={{'marginBottom':'5rem', 'fontFamily':'Norwester'}}>Skills</h1>
      </Fade>
      <Fade right>
        <h4 className='subtitle is-4 has-text-white has-text-weight-light' style={{'fontFamily':'Montserrat', 'fontWeight':'100'}}>Get ready here comes another skills graph. But how well do you really know a person without talking to them?</h4>
      </Fade>
      <Fade left>
        <div className='columns is-mobile'>
        <SkillBarGraph />
        </div>
      </Fade>
    </section>
  )
}

export default Skills;