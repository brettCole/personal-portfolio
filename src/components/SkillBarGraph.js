import React from 'react';
import 'bulma/css/bulma.css';
import '../css/Skills.css';

const SkillBarGraph = () => {
  return (
    <div className='container skills column is-full-mobile'>
        <ul className='lines'>
          <li className='line l--0'>
            <span className='line__label has-text-white'>
              What??
            </span>
          </li>
          <li className='line l--25'>
            <span className='line__label has-text-white'>
              The Basics
            </span>
          </li>
          <li className='line l--50'>
            <span className='line__label has-text-white'>
              Intermediate
            </span>
          </li>
          <li className='line l--75'>
            <span className='line__label has-text-white'>
              Advanced
            </span>
          </li>
          <li className='line l--100'>
            <span className='line__label has-text-white'>
              Expert
            </span>
          </li>
        </ul>
      <div className='charts'>
        <div className='chart chart--dev'>
          <span className='chart__title'>Development</span>
          <ul className='chart--horiz'>
            <li className='chart__bar list-item' style={{'width':'50%'}}>
              <span className='chart__label item'>HTML5</span>
            </li>
            <li className='chart__bar list-item' style={{'width':'50%'}}>
              <span className='chart__label item'>CSS3</span>
            </li>
            <li className='chart__bar list-item' style={{'width':'52%'}}>
              <span className='chart__label item'>Javascript</span>
            </li>
            <li className='chart__bar list-item' style={{'width':'50%'}}>
              <span className='chart__label item'>React / Redux</span>
            </li>
            <li className='chart__bar list-item' style={{'width':'43%'}}>
              <span className='chart__label item'>Ruby and RoR</span>
            </li>
            <li className='chart__bar list-item' style={{'width':'27%'}}>
              <span className='chart__label item'>Python</span>
            </li>
            <li className='chart__bar list-item' style={{'width':'35%'}}>
              <span className='chart__label item'>SQL</span>
            </li>
            <li className='chart__bar list-item' style={{'width':'36%'}}>
              <span className='chart__label item'>Git</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SkillBarGraph;