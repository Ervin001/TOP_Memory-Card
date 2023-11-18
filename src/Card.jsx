import { useState, useEffect } from 'react';

export default function Card({ name, type }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://api.dicebear.com/7.x/pixel-art/${type}?seed=${name}`
        );
        const imageData = await response.blob();
        setImage(URL.createObjectURL(imageData));
      } catch (error) {
        console.error(error);
      }
    };

    //Calls fetchImage
    fetchImage();
  }, []);

  return (
    <div className='card card-box'>
      <h2>This is a Pixel art from the API</h2>
      <div className='Image-container'>
        <img src={image} alt='Avatar' />
      </div>
    </div>
  );
}