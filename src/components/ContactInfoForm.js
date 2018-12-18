import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

class ContactInfoForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'name': '',
      'email': '',
      'phone': '',
      'details': ''
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]:value });
  }

  handleSubmit = (e) => {
    // e.preventDefault();
    // debugger;
  }

  render() {
    return (
      <section className='section' style={{'paddingLeft':'0px', 'paddingRight':'0px'}}>
        <Fade left>
          <h3 className='title is-3' style={{'fontFamily':'Norwester'}}>Please introduce yourself and tell me a little bit about your project</h3>
        </Fade>
        <Fade right>
          <div className='container is-centered card box' style={{'width':'24rem'}}>
            <form onSubmit={this.handleSubmit()} method='POST'>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input className='input has-text-weight-light' name='name' type='text' placeholder='First and Last Name' style={{border:'none', 'borderBottom':'1px solid lightGrey', 'boxShadow':'none', 'borderRadius':'0', 'fontFamily':'Montserrat', 'fontWeight':'100'}} />
                    <span className='icon is-small is-left'>
                      <FontAwesomeIcon icon={faUser} style={{'color':'#4B0082'}} />
                    </span>
                </div>
              </div>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input className='input has-text-weight-light' name='email' type='email' placeholder='Email Input' style={{border:'none', 'borderBottom':'1px solid lightGrey', 'borderRadius':'0', 'boxShadow':'none', 'fontFamily':'Montserrat', 'fontWeight':'100'}} />
                    <span className='icon is-small is-left'>
                      <FontAwesomeIcon icon={faEnvelope} style={{'color':'#4B0082'}} />
                    </span>
                </div>
              </div>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input className='input has-text-weight-light' name='phone' type='number' placeholder='Phone Input' style={{border:'none', 'borderBottom':'1px solid lightGrey', 'borderRadius':'0', 'boxShadow':'none', 'fontFamily':'Montserrat', 'fontWeight':'100'}} />
                    <span className='icon is-small is-left'>
                      <FontAwesomeIcon icon={faPhone} style={{'color':'#4B0082'}} />
                    </span>
                </div>
              </div>
              <div className='field'>
                <label className='label has-text-grey-light has-text-weight-light' style={{'fontFamily':'Montserrat', 'fontWeight':'100'}}>Project Description</label>
                <div className='control'>
                  <textarea className='textarea' name='details'></textarea>
                </div>
              </div>
              <div className="control has-text-centered">
                <button className='button has-text-white' style={{'backgroundColor':'#4B0082', 'fontFamily':'Norwester'}}>Submit</button>
              </div>
            </form>
          </div>
        </Fade>
      </section>
    )
  }
}

export default ContactInfoForm;