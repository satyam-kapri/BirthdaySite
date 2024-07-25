// ImageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ImageContext = createContext();

export const useImages = () => {
  return useContext(ImageContext);
};

export const ImageProvider = ({ children, imagePaths }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imagePaths.length;

    if (totalImages === 0) {
      setImagesLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loadedImages += 1;
      console.log("yes");
      if (loadedImages === totalImages) {
        setImagesLoaded(true);
      }
    };

    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // consider errors as loaded to avoid infinite waiting
    });
  }, [imagePaths]);

  return (
    <ImageContext.Provider value={{ imagesLoaded, imagePaths }}>
      {children}
    </ImageContext.Provider>
  );
};
