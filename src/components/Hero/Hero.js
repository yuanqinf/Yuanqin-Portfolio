import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Yuanqin!
      </SectionTitle>
      <SectionText>
        A software Engineer with the passion for web and game. <br />
        Current master's degree student at <br /> Carnegie Mellon University
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;