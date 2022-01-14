import React from 'react';
import { AboutDivider, Section, AboutText, Img, LogoImg, RefLink } from './AboutMeStyles';
import { IntroText, DetailText1, DetailText2, Accomplishment1, Accomplishment2 } from './AboueMeConstant';

const AboutMe = () => (
  <Section>
    <AboutText main>
      <br />
        {IntroText}
      <br />
    </AboutText>
    <Section nopadding row>
      <Img src={'/images/Yuanqin_Png.png'} />
      <AboutText desc>
        {DetailText1}
        <br /> <br />
        {DetailText2}
      </AboutText>
    </Section>
    <br />
    <AboutDivider />
    <br />
    <AboutText main> Education </AboutText>
    <Section nopadding>
      <AboutText>
        Master of Science: Entertainment Technology @
        <br />
        Carnegie Mellon University
      </AboutText>
      <LogoImg src = "/images/CMU_logo.png"/>
      <br />
      <AboutText>
        Bachelor of Science: Computer Science	@
        <br />
        University of California, Irvine  
      </AboutText>
      <LogoImg src = "/images/UCI_logo.png"/>
    </Section>
    <br />
    <AboutDivider />
    <br />
    <AboutText main> Accomplishment </AboutText>
    <Section nopadding>      
      <RefLink href="https://ieee-cog.org/2021/assets/papers/paper_238.pdf" target="_blank">
        {Accomplishment1}
      </RefLink>
      <br />
      <RefLink href="https://www.cmu.edu/news/stories/archives/2022/january/etc-middle-school-math.html" target="_blank">
        {Accomplishment2}
      </RefLink>
    </Section>
  </Section>
);

export default AboutMe;