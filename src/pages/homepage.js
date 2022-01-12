import React from 'react';
// import Accomplishments from '../components/Accomplishments/Accomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Snowfall from 'react-snowfall'

const Homepage = () => {
  return (
    <Layout>
      <Snowfall color="white" snowflakeCount={20} />
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Timeline />
      <Technologies />
      {/* <Accomplishments /> */}
    </Layout>
  );
};

export default Homepage;
