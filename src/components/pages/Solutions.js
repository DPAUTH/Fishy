import React from 'react'
import './Solutions.css'
import SolutionsInfo from './SolutionsInfo'
import { solutionObjOne, solutionObjTwo, solutionObjThree, solutionObjFour} from './SolutionsData'
import Footer from '../Footer';

export function Solutions(){
    return( 
        <>
        <div className='Sbackgound'>
            <div className='Sheader'>
                <h1>Solutions</h1>
            </div>
        </div>

        <SolutionsInfo {...solutionObjOne}/>
        <SolutionsInfo {...solutionObjTwo}/>
        <SolutionsInfo {...solutionObjThree}/>
        <SolutionsInfo {...solutionObjFour}/>

        <div className='S-Sources'>
            <h3>Sources:</h3>
            <a href="https://www.edf.org/oceans/how-turn-around-overfishing-crisis" target="blank">https://www.edf.org/oceans/how-turn-around-overfishing-crisis</a>
        </div>    
        <Footer/>
        </>
    )

}


export default Solutions