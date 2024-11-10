import React from 'react';
import Hero from '../components/home/Hero';
import Reviews from '../components/shared/Reviews';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Reviews domain="richardhallett.net" />
      {/* Add other sections here */}
    </div>
  );
};

export default Home;