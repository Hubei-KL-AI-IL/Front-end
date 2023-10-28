import React from 'react';

import { Header, Carousel, Footer } from '@/components';
import './style.less';

type HomeProps = object;

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <div className='just_a_space_for_test'></div>
      </main>
      <Footer />
    </>
  );
};
export default Home;
