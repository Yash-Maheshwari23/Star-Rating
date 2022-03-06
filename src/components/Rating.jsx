import React from 'react'
import {FaStar} from 'react-icons/fa';
import './rating.css';
function Rating() {
    const stars = Array(5).fill(0);
    console.log(stars);
  return (
      <React.Fragment>
          <div className='rating'>
              {stars.map((star,index)=>{
                  return(
                    <button><FaStar size={80}/></button>
                  )
              })}
          
          </div>
      </React.Fragment>
  )
}

export default Rating;