import React from 'react';
import 'bulma/css/bulma.css';
import '../css/Skills.css';
import Fade from 'react-reveal/Fade';
// imported component
import SkillBarGraph from './SkillBarGraph';

const Skills = () => {
  return (
    <section className='section content has-text-centered clipBackground skill-section is-marginless' id='skills'>
      <Fade left>
        <h1 className='title is-1 has-text-white'>Skills</h1>
      </Fade>
      <Fade right>
        <h4 className='subtitle is-4 has-text-white has-text-weight-light'>Get ready here comes another skills graph. But how well do you really know a person without talking to them?</h4>
      </Fade>
      <Fade left>
        <div className='columns is-mobile skill-graph'>
          <SkillBarGraph />
        </div>
      </Fade>
    </section>
  )
}

export default Skills;