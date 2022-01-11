import React, { useEffect } from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Snowfall from 'react-snowfall'



const Home = () => {
  useEffect(() => {
    document.title = "Yuanqin Fan | Developer";
  }, []);

  return (
    <Layout>
      <Snowfall
        // Changes the snowflake color
        color="white"
        // Applied to the canvas element
        // style={{ background: '#fff' }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={20}
      />
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Timeline />
      <Technologies />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
