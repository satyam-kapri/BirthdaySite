import React from 'react'
// import car from '../assets/output.png';
// import rim from '../assets/rim.png'
import '../css/Car.css'
import { useEffect } from 'react';
import { useImages } from '../ImageContext';
function Car({left,translate}) {
    const { imagePaths } = useImages();
    useEffect(()=>{
        document.documentElement.style.setProperty('--left', left);
        document.documentElement.style.setProperty('--translate', translate);
    },[])
  return (
    <div className="carouter" >
    <img src={ imagePaths[0]} className="car"/>
    <img src={imagePaths[6]} alt="" className="tyre"/>
    <img src={imagePaths[6]} alt="" className="tyre2"/>
   </div>
  )
}

export default Car
