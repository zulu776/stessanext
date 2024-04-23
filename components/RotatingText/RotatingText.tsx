import React, { useState, useEffect } from 'react';

const RotatingText = () => {
  const texts = [
    'Ciudad de Medellin-Antioquia',
    'Ultimo viernes de cada mes 30%',
    'Sebastian Zuluaga Becerra',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('slide-in');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationClass('slide-out');

      setTimeout(() => {
        setCurrentIndex(currentIndex => (currentIndex + 1) % texts.length);
        setAnimationClass('slide-in');
      }, 1000); // Cambia después de que la animación de salida termine
    }, 3000); // Intervalo total (incluyendo el tiempo de animación)

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className='text-FirstPurple w-[70%] flex justify-center'>
      <span className={`textItem ${animationClass} font-bold`}>
        {texts[currentIndex]}
      </span>
    </div>
  );
};

export default RotatingText;
