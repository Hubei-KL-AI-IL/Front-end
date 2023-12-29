/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Header, Carousel, Footer, TabBox } from '@/components';
import { slideUpOut } from '@/animations';
import './style.less';

type HomeProps = object;

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <ScrollButton />
        <TabBox />
      </main>
      <Footer />
    </>
  );
};

export default Home;

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {showButton && (
        <AnimatePresence>
          <motion.button
            {...slideUpOut}
            onClick={scrollToTop}
            className='go_top'>
            ^<br />
            top
          </motion.button>
        </AnimatePresence>
      )}
    </div>
  );
};
