import React from 'react'
import './Causes.css'


function CausesInfo({
    lightBg, lightText, lightTextDesc, headline, description,img, alt, imgStart}
) {
    return(
        <>
        <div className={lightBg? 'causes_section' : 'causes_section darkBg'}>
            <div className='container'>
                <div className='row causes_row'
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                  <div className='col'>
                      <div className='causes_text-wrapper'>
                          <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                          <p className={lightTextDesc ? 'causes_subtitle': 'causes_subtitle dark'}>{description}
                          </p>
                      </div>
                  </div>
                  <div className='col'>
                      <div className='causes_img-wrapper'>
                          <img src={img} alt={alt} className='causes_img'/>
                      </div>
                  </div>    
                </div>
            </div>
        </div>
        
        </>
    )

    
}

export default CausesInfo