import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Causes from '../images/causes.jpg';
import Effects from '../images/effects.jpg';
import Solutions from '../images/dolphin.jpg';
import FishIndex from '../images/fish-index.jpg';
import Contact from '../images/contact.jpg';



function Cards() {
  return (
    <div className='cards'>
      <h1>Learn more about...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {Causes}
              text='What puts sea life in danger?'
              path='/causes'
            />
            <CardItem
              src={Effects}
              text='What are the outcomes?'
              path='/effects'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Solutions}
              text='How to tackle the problem'
              path='/solutions'
            />
            <CardItem
              src={FishIndex}
              text='Avoid catching these endangered species in your nets'
              path='/fish-index'
            />
            <CardItem
              src={Contact}
              text='Send us your queries'
              path='/contact-form'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;