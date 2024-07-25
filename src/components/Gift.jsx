import React from 'react'
import '../css/gift.css'
import Confetti from 'react-confetti'
import useWindowSize from "react-use/lib/useWindowSize";
import { motion } from 'framer-motion';
import balloons from '../assets/balloons.png'

import { useImages } from '../ImageContext';
function Gift({result}) {
    const { width, height } = useWindowSize();
    const {imagePaths}=useImages();
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    id='gift-container'>
         <Confetti
      width={width}
      height={height}
    />
     <img src={imagePaths[2]} className='saniya'></img>
     <img src={imagePaths[10]} alt="" srcset="" className='crown'/>
       <div className='happybirthday'>Happy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;birthday</div>
      <img src={imagePaths[11]} alt="" srcset="" className='cake'/><br></br>
     
      <div>
       
        {
        Array.from({length:result.score},(_, index)=>(
          <img key={index} src={imagePaths[5]} className='momo' />
        ))
        }
      </div>
      <span className='momotext'>You won {result.score} plate momos! <br></br>Enjoy</span>
      <img src={balloons} className='balloons' style={{left:0}}></img>
      <img src={balloons} className='balloons' style={{right:0}}></img>
    </motion.div>
  ) 
}

export default Gift
