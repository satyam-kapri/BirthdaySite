import React, { useEffect } from 'react'
import '../css/gift.css'
import cake from '../assets/cake.webp'
import Confetti from 'react-confetti'
import useWindowSize from "react-use/lib/useWindowSize";
import { motion } from 'framer-motion';
import momos from '../assets/momos.png'
import balloons from '../assets/balloons.png'
import saniya from '../assets/girl.png'
import crown from '../assets/crown.png'
function Gift({result}) {
    const { width, height } = useWindowSize();
   
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
     <img src={saniya} className='saniya'></img>
     <img src={crown} alt="" srcset="" className='crown'/>
       <div className='happybirthday'>Happy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;birthday</div>
      <img src={cake} alt="" srcset="" className='cake'/><br></br>
     
      <div>
       
        {
        Array.from({length:result.score},(_, index)=>(
          <img key={index} src={momos} className='momo' />
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
