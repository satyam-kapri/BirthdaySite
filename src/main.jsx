import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ImageProvider } from './ImageContext';
import imagePaths from './imagePaths';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageProvider imagePaths={imagePaths}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ImageProvider>
   
  </React.StrictMode>,
)
