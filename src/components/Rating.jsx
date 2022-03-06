import React from 'react'
import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './rating.css';
function Rating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const stars = Array(5).fill(0);
    
  return (
      <React.Fragment>
          <div className='rating'>
              {stars.map((star,index)=>{
                  return(
                    <button
                    type='button'
                    key={index}
                    className={(hover || rating)>index ? "on":"off"}
                    onMouseEnter = {()=>setHover(index+1)}
                    onMouseLeave = {()=>setHover(rating)}
                    onClick = {()=>setRating(index+1)}
                    >
                        <FaStar size={60}/>
                        </button>
                  )
              }
            )
        }

          
          </div>
          <h1>Your rating is : <span>{rating>0?rating:''}</span></h1>
      </React.Fragment>
  )
}

export default Rating;