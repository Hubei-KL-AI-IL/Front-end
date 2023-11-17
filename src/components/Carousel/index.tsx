import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BiPlayCircle, BiStopCircle } from 'react-icons/bi';

import { Hero1, Hero2, Hero3, scroll_button } from '@/assets';
import { heroDescriptions } from '@/utils/helpers';
import { slideInText, driftImg } from '@/animations';
import './style.less';

type CarouselProps = object;

const Carousel: React.FC<CarouselProps> = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [showDescription, setShowDescription] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => {
        const nextSlide = (activeSlide + 1) % 3;
        setActiveSlide(nextSlide);
        setShowDescription(false);
        setTimeout(() => {
          setShowDescription(true);
        }, 300);
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeSlide, autoPlay]);

  const handleControlClick = (index: number) => {
    setActiveSlide(index);
    setShowDescription(false);
    setTimeout(() => {
      setShowDescription(true);
    }, 300);
  };

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.85,
      behavior: 'smooth',
    });
  };

  const renderInputs = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <input
        key={index}
        type='radio'
        name='control'
        defaultChecked={index === 0}
        onClick={() => handleControlClick(index)}
      />
    ));
  };

  const renderSlides = () => {
    return [Hero1, Hero2, Hero3].map((hero, index) => (
      <img
        key={index}
        src={hero}
        alt={`Hero${index + 1}`}
        className='slide'
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        loading='lazy'
      />
    ));
  };

  const renderControlLabels = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <motion.label
        whileTap={{ scale: 0.9 }}
        key={index}
        htmlFor={`control-${index + 1}`}
        className={activeSlide === index ? 'active' : ''}
        onClick={() => handleControlClick(index)}></motion.label>
    ));
  };

  return (
    <section className='carousel'>
      {renderInputs()}
      {renderSlides()}
      <div className='triangle'></div>
      <AnimatePresence>
        <motion.div
          whileTap={{ scale: 0.9 }}
          className='hero_description_container'>
          {showDescription && (
            <motion.p {...slideInText} className='hero_description'>
              {heroDescriptions[activeSlide]}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      <div className='carousel-controler'>
        <motion.div
          whileTap={{ scale: 0.9 }}
          className='play-button'
          onClick={() => setAutoPlay(!autoPlay)}>
          {!autoPlay ? <BiPlayCircle /> : <BiStopCircle />}
        </motion.div>
        <div className='controls-visible'>{renderControlLabels()}</div>
      </div>
      <motion.div
        whileTap={{ scale: 1.2 }}
        className='scroll_button'
        onClick={handleScrollClick}>
        <motion.img {...driftImg} src={scroll_button} alt='向下滚动按钮' />
      </motion.div>
      
    </section>
  );
};

export default Carousel;
