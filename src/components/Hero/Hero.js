import React from 'react';

import { Section, SectionText, SectionTitle, SectionTextHighlight } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { AiOutlineSend } from 'react-icons/ai';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Yuanqin! &nbsp;
      </SectionTitle>
      <SectionText>
        A Software Engineer that specializes in
        <br />
        <SectionTextHighlight>web-development and game-programming</SectionTextHighlight>
      </SectionText>
      <Button onClick={() => window.location = "https://google.com"}>
        Contact Me &nbsp;
        <AiOutlineSend size="2rem" />
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;