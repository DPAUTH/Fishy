import React, {useState, useEffect} from 'react';
import "./Feed.css";
import Share from '../Share';
import Post from '../Post';
import {FaArrowCircleUp} from 'react-icons/fa'

export default function Feed() {
    const ScrollArrow = () =>{

        const [showScroll, setShowScroll] = useState(false)
      
        const checkScrollTop = () => {
          if (!showScroll && window.pageYOffset > 400){
            setShowScroll(true)
          } else if (showScroll && window.pageYOffset <= 400){
            setShowScroll(false)
          }
        };
      
        const scrollTop = () =>{
          window.scrollTo({top: 0, behavior: 'smooth'});
        };
      
        window.addEventListener('scroll', checkScrollTop)
      
        return (
              <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}/>
        );
      }
    
    return(
        <div className= "feed">
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <ScrollArrow/>
            
        </div>
       
            
            
    )
}