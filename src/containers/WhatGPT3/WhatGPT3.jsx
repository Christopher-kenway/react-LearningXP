import React from 'react';
import './WhatGPT3.css';
import { Feature } from '../../components';


const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section-margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
       <Feature />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
    
      </div>
      <div className='gpt3__whatgpt3-container'>
         <Feature />
         <Feature />
         <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3