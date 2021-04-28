import React from 'react'
import FishIndex from './FishIndex';
import {FishIndexData} from './FishIndexData'

export function FishIndexSlider(){
    return( 
        <>

        <FishIndex slides={FishIndexData}/>

        </>
    )

}


export default FishIndexSlider