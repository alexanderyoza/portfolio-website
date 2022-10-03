import React, { useState, useRef } from "react";
import './Top.css';

import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';

import dropdown from '../../images/dropdown.png';


function Top() {


  const [state, setState] = useState({
    ddMenu:'top-links',
    open: false
  });


  const handleDrop = () => {
    if (state.open === true){
      return 'top-links';
    } else {
      return 'top-links2';
    }
  }


  return (
    <div>
      <div className='top-behind'></div>
      <div className='top-container'>
        <div className='top-left'>
          <div className='top-dropdown' onClick={() => setState({ddMenu: handleDrop(), open: !state.open})}>
            <div className='top-dropdown-icon'>
              <img className='top-img' src={dropdown} alt='dropdown'/>
            </div>
            <div className={state.ddMenu}>
              <div className='top-link-container'>
                <a href='#about-me' className='top-link'>About Me</a>
              </div>
              <div className='top-link-container'>
                <a href='#skills' className='top-link'>Skills</a>
              </div>
              <div className='top-link-container'>
                <a href='#experience' className='top-link'>Experience</a>
              </div>
              <div className='top-link-container'>
                <a href='#projects' className='top-link'>Projects</a>
              </div>
              <div className='top-link-container'>
                <a href='#contact' className='top-link'>Contact</a>
              </div>
            </div>
            {state.ddMenu}
          </div>
          <div className='top-name'>
            Alexander Yoza
          </div>
        </div>
        <div className = 'top-socials'>
          <div className='top-linkedin'>
            <a href='https://www.linkedin.com/in/alex-yoza-737150231/' target="_blank"><img className='top-img' src={linkedin} alt='linkedin'/></a>
          </div>
          <div className='top-github'>
            <a href='https://github.com/alexanderyoza' target="_blank"><img className='top-img' src={github} alt='github'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top;
