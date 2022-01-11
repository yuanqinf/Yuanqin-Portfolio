import React from 'react';
import { Section, SectionText, SectionTitle, SectionTextHighlight } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, AnimatedIcon, LinkIcon } from './HeroStyles';
import { AiOutlineSend } from 'react-icons/ai';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Yuanqin! &nbsp;
      </SectionTitle>
      <SectionText>
        A Software Engineer specializes in
        <br />
        <SectionTextHighlight>web-development and game-programming</SectionTextHighlight>
        Graduate Student (class of 2022) @ &nbsp;
        <SectionTextHighlight main >Carnegie Mellon University</SectionTextHighlight>
      </SectionText>
      <Button onClick={() => window.location = "mailto:fanyuanqin96@gmail.com"}>
        Contact Me &nbsp;
        <AiOutlineSend size="2rem" />
      </Button>
      <LinkIcon href={"#projects"} > <AnimatedIcon /></LinkIcon>
    </LeftSection>
  </Section>
);

export default Hero;