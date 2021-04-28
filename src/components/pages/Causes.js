import React from 'react'
import "./Causes.css"
import CausesInfo from './CausesInfo'
import { causeObjOne, causeObjTwo, causeObjThree, causeObjFour} from './CausesData'
import Footer from '../Footer';


export function Causes(){
    return (
       <>
        <div className='Cbackgound'>
            <div className='Cheader'>
                <h1>Causes</h1>
            </div>
        </div>
        <CausesInfo {...causeObjOne}/>
        <CausesInfo {...causeObjTwo}/>
        <CausesInfo {...causeObjThree}/>
        <CausesInfo {...causeObjFour}/>
        <div className='C-Sources'>
            <h3 style={{color: "white"}}>Sources:</h3>
            <a style={{color: "white"}} href="https://www.edf.org/oceans/overfishing-most-serious-threat-our-oceans" target="blank">https://www.edf.org/oceans/overfishing-most-serious-threat-our-oceans </a>
            <br/>
            <a style={{color: "white"}} href="https://www.oecd.org/agriculture/government-subsidies-overfishing/" target="blank">https://www.oecd.org/agriculture/government-subsidies-overfishing/ </a>
        </div>
        <Footer />
       </>
        
    )

}

export default Causes