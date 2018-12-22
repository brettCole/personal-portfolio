import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import '../css/NavbarAndMenu.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';

class NavbarAndMenu extends Component {

  componentDidMount() {
    // Get all 'navbar-burger' elements
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if (navbarBurgers.length > 0) {
      //Add a click event on each of them
      navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          // Get the target from the 'data-target' attribute
          const target = el.dataset.target;
          const theTarget = document.getElementById(target);
          // Toggle the 'is-active' class on both the 'navbar-burger' and the 'navbar-menu'
          el.classList.toggle('is-active');
          theTarget.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <nav 
        class='navbar is-transparent' 
        role='navigation' 
        aria-label='main navigation'  
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <Logo />
          </a>
          <div 
            role='button' 
            className='navbar-burger' 
            data-target='navMenu' 
            aria-label='menu' 
            aria-expanded='false' 
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className='navbar-menu overlay' id='navMenu'>
          <div className='navbar-end overlay-content'>
            <a className='navbar-item' href='/#projects'>Projects</a>
            <Link className='navbar-item' to='/about'>About</Link>
            <Link className='navbar-item' to='/blog'>Blog</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavbarAndMenu;