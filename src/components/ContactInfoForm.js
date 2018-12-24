import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../css/ContactFormAndFooter.css';
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
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        this.setState({
          name: '',
          email: '',
          phone: '',
          details: ''
        });
        alert('Success!');
      })
      .catch(error => alert(error));

    e.preventDefault();
  }

  encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  render() {
    const { name, email, phone, details } = this.state;
    return (
      <section className='section contact-section'>
        <Fade left>
          <h3 className='title is-3'>Please introduce yourself and tell me a little bit about your project</h3>
        </Fade>
        <Fade right>
          <div className='container is-centered card box contact-container'>
            <form name='contact' method='POST' onSubmit={this.handleSubmit} netlify-honeypot='bot-field' data-netlify='true'> 
              <p className="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
              </p>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input 
                    className='input has-text-weight-light' 
                    name='name' 
                    type='text'
                    value={name}
                    onChange={this.handleInputChange}
                    placeholder='First and Last Name' 
                  />
                  <span className='icon is-small is-left'>
                    <FontAwesomeIcon icon={faUser} style={{'color':'#4B0082'}} />
                  </span>
                </div>
              </div>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input 
                    className='input has-text-weight-light' 
                    name='email' 
                    type='email' 
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder='Email' 
                  />
                  <span className='icon is-small is-left'>
                    <FontAwesomeIcon icon={faEnvelope} style={{'color':'#4B0082'}} />
                  </span>
                </div>
              </div>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input 
                    className='input has-text-weight-light' 
                    name='phone' 
                    type='number' 
                    value={phone}
                    onChange={this.handleInputChange}
                    placeholder='Phone Number'
                  />
                  <span className='icon is-small is-left'>
                    <FontAwesomeIcon icon={faPhone} style={{'color':'#4B0082'}} />
                  </span>
                </div>
              </div>
              <div className='field'>
                <label className='label has-text-grey-light has-text-weight-light'>Project Description</label>
                <div className='control'>
                  <textarea 
                    className='textarea' 
                    name='details' 
                    value={details} 
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div className="control has-text-centered">
                <button className='button has-text-white' type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </Fade>
      </section>
    )
  }
}

export default ContactInfoForm;