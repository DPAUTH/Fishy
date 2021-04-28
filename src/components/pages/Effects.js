import React from 'react'
import './Effects.css'
import EffectsInfo from './EffectsInfo'
import { effectObjOne, effectObjTwo, effectObjThree, effectObjFour} from './EffectsData'
import Footer from '../Footer';

export function Effects(){
    return( 
        <>
        <div className='Ebackgound'>
            <div className='Eheader'>
                <h1>Effects</h1>
            </div>
        </div>

        <EffectsInfo {...effectObjOne}/>
        <EffectsInfo {...effectObjTwo}/>
        <EffectsInfo {...effectObjThree}/>
        <EffectsInfo {...effectObjFour}/>
        <div className='Ε-Sources'>
            <h3>Sources:</h3>
            <a href="https://unctad.org/project/regulating-fisheries-subsidies " target="blank">https://unctad.org/project/regulating-fisheries-subsidies </a>
            <br/>
            <a href="https://www.worldwildlife.org/threats/overfishing/" target="blank">https://www.worldwildlife.org/threats/overfishing </a>
        </div>
        <Footer/>
        </>
    )

}


export default Effects