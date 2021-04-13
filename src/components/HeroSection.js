import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import bubble from '../images/bubble.png';

console.log(bubble);

function HeroSection() {
    return (
     <div className='hero-container'>{/*είναι η βασική κλάση*/}  
        {/*<video src='placeholder' autoPlay loop muted /> -->όταν βρούμε βίντεο για background*/}
        <h1>SEA LIFE IS IN DANGER</h1>
        <p>PROTECT OUR SEAS</p> 
        <div className='hero-btns'>
        {/*κληρονωμεί την συνάρτηση Button*/}
          <Button  
            className='btns' 
            buttoonStyle='btn-outline'
            buttonSize='btn--large'
          >
           Join the Fight
           
          </Button>
          <Button
            className='btns'
            buttoonStyle='btn-primary'
            buttonSize='btn--large'
            
          >        
            Watch    
            <i className='far fa-play-circle'/> {/*Η κλάση αυτή δείχνει */}
          </Button>
        </div>
         <div class="animated-bubbles">{/*η κλάση με την οποία γίνεται το animation με τις φυσαλίδες*/}
           <img src={bubble} alt="bubble"/>
           <img src={bubble} alt="bubble"/>
           <img src={bubble} alt="bubble"/>
           <img src={bubble} alt="bubble"/>
           <img src={bubble} alt="bubble"/>
           <img src={bubble} alt="bubble"/>
           
          </div>
     </div>
    );
}

export default HeroSection;