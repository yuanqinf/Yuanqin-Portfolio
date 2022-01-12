import React, { useEffect } from 'react';
import Homepage from './homepage';

const Home = () => {
  useEffect(() => {
    document.title = "Yuanqin Fan | Developer";
  }, []);

  return (
    <Homepage />
  );
};

export default Home;
