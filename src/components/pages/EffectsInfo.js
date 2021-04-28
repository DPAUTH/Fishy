import React from 'react'
import './Effects.css'


function EffectsInfo({
    lightBg, lightText, lightTextDesc, headline, description,img, alt, imgStart}
) {
    return(
        <>
        <div className={lightBg? 'effects_section' : 'effects_section darkBg'}>
            <div className='container'>
                <div className='e-row effects_row'
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                  <div className='col'>
                      <div className='effects_text-wrapper'>
                          <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                          <p className={lightTextDesc ? 'effects_subtitle': 'effects_subtitle dark'}>{description}
                          </p>
                      </div>
                  </div>
                  <div className='col'>
                      <div className='effects_img-wrapper'>
                          <img src={img} alt={alt} className='effects_img'/>
                      </div>
                  </div>    
                </div>
            </div>
        </div>
        
        </>
    )
        
    
}

export default EffectsInfo;