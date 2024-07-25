import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3';
import song from './assets/sham.mp3'

function App() {
 
    function playaudio(){
    document.getElementById('audio').play();}
 
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const location = useLocation();
  return (<>
    
     <audio id='audio' src={song} autoPlay={true} loop>
     </audio>

    <AnimatePresence >
    <Routes location={location} key={location.pathname} >
      <Route path="/" element={<Page1 playaudio={playaudio}></Page1>} />
      <Route path="/page2" element={<Page2 result={result} setResult={setResult}></Page2>} />
      <Route path="/page3" element={<Page3 result={result} ></Page3>} />
    </Routes>
  </AnimatePresence>
  </>
  )
}

export default App
