import React, { useState } from 'react'
import Car from './Car'
import { motion } from 'framer-motion';
import '../css/page3.css'
import Gift from './Gift'
import { useImages } from '../ImageContext'
function Page3({result}) {
   const [showgift,setshowgift]=useState(false);
   const {imagePaths}=useImages();
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className='page3'
  >
       <Car left={'-182vh'} translate={'1441px'}></Car>
     <img src={imagePaths[7]} alt="" srcset="" className='tree'/>
     <img src={imagePaths[12]} alt="" srcset="" className='cloud'/>
     <img src={imagePaths[12]} alt="" srcset="" className='cloud2'/>
   
     <img src={imagePaths[3]} alt="" className='gift' onClick={()=>{setshowgift(true);}}/>
     
     <div className='heading'>Its Time For<br></br>Your<br></br> Gift</div>
     
     <motion.div
    initial={{ opacity: 0,scale:0}}
    animate={{ opacity: 1 ,scale:1}}
    transition={{ duration: 0.5,delay:5}}
    className='boyouter'
  >
    <img src={imagePaths[9]} alt="" srcset="" className='boy3'/>
    <img src={imagePaths[8]} alt="" srcset="" className='girl3'/>
    <div className='message3'>
       See! This is your gift <br></br> Open it Now<br></br>(click it)
    </div>
     </motion.div>
     {
        showgift
        &&
        <Gift result={result}></Gift>
        
    }
     </motion.div>
   
  )
}

export default Page3
