import React from 'react';

import { Header, Carousel } from '@/components';

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Carousel />
      </main>
    </>
  );
};
export default Home;
