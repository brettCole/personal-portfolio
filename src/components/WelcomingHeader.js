import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../css/WelcomingHeader.css';
import Fade from 'react-reveal/Fade';
import TimeOfDayMessage from './TimeOfDayMessage';

class WelcomingHeader extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();

    this.state = {
      greeting: 'Hello',
      project: 'creations',
      switch: true
    }

    this.greetingIndex = 0;
    this.projectIndex = 0;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.switchGreeting();
      this.switchProject();
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  switchGreeting() {
    const greetings = ['Hello', 'Hola', 'Bonjour', 'Nǐn hǎo', 'Salve', 'Guten Tag', 'Olá', 'Konnichiwa'];
    if (greetings[this.greetingIndex] === undefined) {
      this.greetingIndex = 0;
      this.setState({
        switch:true,
        greeting:greetings[this.greetingIndex]
      })
      this.greetingIndex++
      this.setState({ switch:false })
    } else {
      this.setState({
        switch:true,
        greeting:greetings[this.greetingIndex]
      })
      this.greetingIndex++
      this.setState({ switch:false })
    }
  }

  switchProject() {
    const projects = ['creations', 'ideas', 'projects', 'designs'];
    if (projects[this.projectIndex] === undefined) {
      this.projectIndex = 0;
      this.setState({
        project: projects[this.projectIndex]
      })
      this.projectIndex++
    } else {
      this.setState({
        project: projects[this.projectIndex]
      })
      this.projectIndex++
    }
  }
  
  render () {

    return (
      <section className='section is-medium header-section'>
        <div className='has-text-centered'>
          <div className='container header-container'>
            <Fade mirror={true}>
            <h1 className='title is-1'>Full-Stack Developer</h1>
            </Fade>
          </div>
          <div className='container column is-full-mobile'>
            <h4 className='subtitle is-4'>
              <Fade right>
                <TimeOfDayMessage />
              </Fade>
            </h4>
            <Fade left>
              <h4 className='subtitle is-4 description'> 
                <h3 
                  className={'subtitle is-3 is-marginless is-paddingless is-inline has-text-success sizeDifference' + (this.state.switch ? 'slideWord' : '')} 
                  ref={this.myRef}
                >
                  {this.state.greeting} 
                </h3>
                  {' '}my name is Brett Cole. I'm a Full-Stack Developer who is looking to empower innovators with their 
                <h3 className={'subtitle is-3 is-marginless is-paddingless is-inline has-text-success sizeDifference ' + (this.state.switch ? 'slideWord' : '')}
                > {this.state.project}
                </h3>. I am excited to get to know you and contribute to something amazing!
              </h4>
            </Fade>
          </div>
        </div>
      </section>
    )
  }
}

export default WelcomingHeader;