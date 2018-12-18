import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../css/IndividualProjects.css';

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
      // className={`column card box is-one-quarter-tablet flipCardContainer ${this.state.flip ? 'cardFlipped' : 'cardFlipBack'}`}
      className={`column card box is-two-thirds-mobile is-one-quarter-tablet cardContainer ${this.state.flip ? ' cardFlipped' : ''}`}
      style={{
        'marginRight':'0.75rem',
        'marginTop':'4rem',
        backgroundImage: this.state.flip === false ? `url(${this.props.backgroundImage})` : '',
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center top',
      }}  
      onMouseEnter={this.flipCard}
      onMouseLeave={this.flipCardBack}
      onClick={this.state.flip ? this.flipCardBack : this.flipCard}
    >
      
      <header className='box' style={{'transform':'translateY(-3rem)', 'margin-bottom':'0'}}>
        <p className='title is-4 is-centered' style={{color:'#260042', 'fontFamily':'Norwester'}}>{this.props.title}</p>
      </header>
      <div className={`card__side card__side--front${this.state.flip ? 'cardFlipped' : ''}`} style={{'marginBottom':'0'}}>
      {/* <div 
        // className={`card-content is-centered side ${this.state.flip ? 'flip' : ''}`} 
        className={`card-content is-centered side ${this.state.flip ? 'cardFlipped' : ''}`}
        style={{
          backgroundImage:`url(${this.props.backgroundImage})`,
          backgroundSize:'100% 100%',
          backgroundRepeat:'no-repeat',
          backgroundPosition:'center top'
        }}
      ></div> */}
      <div className={`card-content is-centered is-paddingless card__side card__side--back ${this.state.flip ? ' cardBack cardFlipped' : ' back'}`}
      >
        <div className='content is-centered' style={{'fontFamily':'Montserrat'}}>
        {this.props.description}
        </div>
      <div className='columns is-mobile is-centered'>
        <footer className='box column is-paddingless is-three-quarters'>
          <ul className='columns is-multiline is-mobile is-marginless'>
           {this.props.techStack.map(each => {
             return (
               <li className='column is-half is-paddingless is-marginless is-size-7 has-text-weight-light' style={{'fontFamily':'Montserrat'}}>{each}</li>
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