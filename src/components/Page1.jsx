import React, { useState } from 'react'
import '../css/page1.css'
import Car from './Car'
// import tree from '../assets/image-Photoroom.png'
import cloud from '../assets/image 6.png'
import girl from '../assets/image-removebg-preview (2).png'
import boy from '../assets/pikaso_texttoimage_A-3d-illustration-of-handsome-and-healthy-boy-wear-removebg-preview.png'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useImages } from '../ImageContext';
function Page1({playaudio}) {
  const [start,setstart]=useState(false);
  const { imagesLoaded,imagePaths} = useImages();
  return (<>
    {!imagesLoaded || !start?
    <div className='blackout'>
          <div>
          <span>Ready for the ultimate experience...</span><br></br>
          {imagesLoaded&&<button onClick={()=>{setstart(true);playaudio();}}>Yes Lets Go!!</button>}
          </div>
    </div> :
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
        
       <Car left={'-135vh'} translate={'743px'}></Car>
     <img src={imagePaths[7]} alt="" srcset="" className='tree'/>
     <img src={cloud} alt="" srcset="" className='cloud'/>
     <img src={cloud} alt="" srcset="" className='cloud2'/>
     <img src={girl} alt="" srcset="" className='girl'/>
     
     <div className='heading'>Lets Go for<br></br>a ride</div>
     <motion.div
    initial={{ opacity: 0,scale:0}}
    animate={{ opacity: 1 ,scale:1}}
    transition={{ duration: 0.5,delay:5}}
  
    className='boyouter'
  >
    <img src={boy} alt="" srcset="" className='boy'/>
    <div className='message'>
        Hi !! Saniya its your <br></br>birthday today<br></br>Would you like to go <br></br>on a drive with me 
       
    </div>
    <div className='replymessage'>
      <br></br>
    Yes of course<br></br>Ye bhi koi puchne ki baat he
    
     <button className='button-87' ><Link to="/page2" style={{color:'white'}}>Lets Go</Link></button>
    </div>
     </motion.div>
     
     </motion.div>}</>
  )
}

export default Page1
