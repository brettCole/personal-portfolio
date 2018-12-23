import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../css/Projects.css';

class IndividualProjects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      flip:false
    }
  }

  flipCard = () => {
    this.setState({ flip:true })
  }

  flipCardBack = () => {
    this.setState({ flip:false })
  }

  render() {
    return (
      <div 
        className={`column card box is-two-thirds-mobile is-one-quarter-tablet cardContainer individual-project-container ${this.state.flip ? ' cardFlipped' : ''}`}
        style={{backgroundImage: this.state.flip === false ? `url(${this.props.backgroundImage})` : ''}}  
        onMouseEnter={this.flipCard}
        onMouseLeave={this.flipCardBack}
        onClick={this.state.flip ? this.flipCardBack : this.flipCard}
      >
        <header className='box'>
          <p className='title is-4 is-centered'><a href={this.props.link}>{this.props.title}</a></p>
        </header>
        <div className={`card__side front-card card__side--front${this.state.flip ? 'cardFlipped' : ''}`}>
          <div className={`card-content is-centered is-paddingless card__side card__side--back ${this.state.flip ? ' cardBack cardFlipped' : ' back'}`}>
            <div className='content is-centered'>
              {this.props.description}
            </div>
            <div className='columns is-mobile is-centered'>
              <footer className='box column is-paddingless is-three-quarters'>
                <ul className='columns is-multiline is-mobile is-marginless'>
                  {this.props.techStack.map(each => {
                    return (
                      <li className='column is-half is-paddingless is-marginless is-size-7 has-text-weight-light'>{each}</li>
                    )
                  })}
                </ul>
              </footer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default IndividualProjects;