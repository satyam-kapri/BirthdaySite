import React, { useEffect, useState } from 'react'
import '../css/page2.css'
import { motion } from 'framer-motion';
import Car from './Car';
// import shop from '../assets/Designer-Photoroom.png'
// import chef from '../assets/chef.png'
import Quiz from './Quiz';
import { useImages } from '../ImageContext';
function Page2({result,setResult}) {
    const [showquiz,setshowquiz]=useState(false);
    const {imagePaths}=useImages();
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    id='page2'
  >
      
      
      <Car left={'-107vh'} translate={'996px'}></Car>
      {showquiz===true?
      <Quiz result={result} setResult={setResult}></Quiz>
      :<>
      <img src={imagePaths[1]} alt="" srcset="" className='shop' />
      <button className='button-33' onClick={()=>{setshowquiz(true);}}>Enter the restuarant</button>
      </>}
      <div className='heading'>Lets See Your<br></br> Love For<br></br> Food</div>
      
      
    </motion.div>
  )
}

export default Page2
