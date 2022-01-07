import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Yuanqin's Portfolio
      </SectionTitle>
      <SectionText>
        The developer who wish to create something that can enrich my audience lives by connecting them through a lively, collaborative and imaginative virtual world.
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;