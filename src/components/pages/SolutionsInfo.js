import React from 'react'
import './Solutions.css'


function SolutionsInfo({
    lightBg, lightText, lightTextDesc, headline, description,img, alt, imgStart}
) {
    return(
        <>
        <div className={lightBg? 'solutions_section' : 'solutions_section darkBg'}>
            <div className='container'>
                <div className='s-row solutions_row'
                    style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                  <div className='col'>
                      <div className='solutions_text-wrapper'>
                          <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                          <p className={lightTextDesc ? 'solutions_subtitle': 'solutions_subtitle dark'}>{description}
                          </p>
                      </div>
                  </div>
                  <div className='col'>
                      <div className='solutions_img-wrapper'>
                          <img src={img} alt={alt} className='solutions_img'/>
                      </div>
                  </div>    
                </div>
            </div>
        </div>
        
        </>
    )
        
    
}

export default SolutionsInfo;