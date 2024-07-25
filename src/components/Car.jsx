import React from 'react'
import car from '../assets/output.png';
import rim from '../assets/rim.png'
import '../css/Car.css'
import { useEffect } from 'react';
function Car({left,translate}) {
    useEffect(()=>{
        document.documentElement.style.setProperty('--left', left);
        document.documentElement.style.setProperty('--translate', translate);
    },[])
  return (
    <div className="carouter" >
    <img src={car} className="car"/>
    <img src={rim} alt="" className="tyre"/>
    <img src={rim} alt="" className="tyre2"/>
   </div>
  )
}

export default Car
