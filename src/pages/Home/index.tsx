import React from 'react';

import { Header, Carousel } from '@/components';
import './style.less'

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <div className='just_a_space_for_test'></div>
      </main>
    </>
  );
};
export default Home;
