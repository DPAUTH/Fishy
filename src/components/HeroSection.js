import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import bubble from '../images/bubble.png';
import { Link } from "react-router-dom";

console.log(bubble);

function HeroSection() {
    return (
     <div className='hero-container'>{/*είναι η βασική κλάση*/}  
        {/*<video src='placeholder' autoPlay loop muted /> -->όταν βρούμε βίντεο για background*/}
        <h1>SEA LIFE IS IN DANGER</h1>
        <p>PROTECT OUR SEAS</p> 
        <div className='hero-btns'>
        {/*κληρονωμεί την συνάρτηση Button*/}
        
        <Link to="/sign-up">
          <Button  
            className='btns' 
            buttoonStyle='btn-outline'
            buttonSize='btn--large'
          >
        
           Join the Fight
           
          </Button>
          </Link>

          <a href='https://www.youtube.com/watch?v=yfk07yhH9Mg'>
          <Button
            className='btns'
            buttoonStyle='btn-primary'
            buttonSize='btn--large'
            to="/sign-up"
            
          >        
            Watch     
            <i className='far fa-play-circle'/> {/*Η κλάση αυτή δείχνει */}
          </Button>
          </a>
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