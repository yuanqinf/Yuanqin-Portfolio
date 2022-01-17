import React, { useState, useEffect } from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';
import { WanderMath } from "../../../constants/constants"
import YouTube from 'react-youtube';

const optsBig = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
};

const optsSmall = {
    height: '144',
    width: '256',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
};

export default function WanderMathComponent() {
    const [width, setWidth] = useState(0);
    const isMobile = (width <= 768);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [])

    return (
        <Section flex>
            <Img src='/images/ProjectImage/WanderMath.png' />
            <br />
            <ProjectDivider />
            <ProjectTitle>WanderMath</ProjectTitle>
            <ProjectGridContainer>
                <ProjectGridInfo >
                    <ProjectText main >Genre</ProjectText>
                    <ProjectText>AR Game</ProjectText>
                    <ProjectText main >Description</ProjectText>
                    <ProjectText desc >{WanderMath.description}</ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2021 Fall(3 months)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>Unity3D &nbsp; ARCore &nbsp; IOS </ProjectText>
                    <ProjectText partner>collaborated with Sophia, Leslie, Katherine and Jacob </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://apps.apple.com/us/app/wandermath/id1598652813?fbclid=IwAR14lF-xSMtPf90VY6px_xiq-O68pVen7erdlREPM8dhZslg-GXa2ZazfSE", '_blank')}>Try it now! (App Store)</PlayBtn>
            <PlayBtn onClick={() => window.open("https://play.google.com/store/apps/details?id=com.DefaultCompany.WanderMath", '_blank')}>Try it now! (Google Play)</PlayBtn>
            <PlayBtn onClick={() => window.open("https://www.cmu.edu/news/stories/archives/2022/january/etc-middle-school-math.html")}>Learn more from CMU News</PlayBtn>
            <br />
            <ProjectText main >Trailer Video</ProjectText>
            <YouTube videoId="-q1B8Ck-GMA" opts={!isMobile ? optsBig : optsSmall}/>
            <ProjectText main >Level 1(birthday party)</ProjectText>
            <Section nopadding row>
                <GifImg src={'/images/ProjectDetailMedia/WanderMath/WanderMathA1_0.gif'} alt="loading..." />
                <GifImg src={'/images/ProjectDetailMedia/WanderMath/WanderMathA1_1.gif'} alt="loading..." />
            </Section>
            <ProjectText main >Level 2(Skate Park)</ProjectText>
            <Section nopadding row>
                <GifImg src={'/images/ProjectDetailMedia/WanderMath/WanderMathA2_1.gif'} alt="loading..." />
                <GifImg src={'/images/ProjectDetailMedia/WanderMath/WanderMathA2_2.gif'} alt="loading..." />
            </Section>
            
            <ProjectText main >Level 3(Carnival Booth)</ProjectText>
            <Section nopadding row>
                <GifImg src={'/images/ProjectDetailMedia/WanderMath/WanderMathA3_1.gif'} alt="loading..." />
                <GifImg src={'/images/ProjectDetailMedia/WanderMath/WanderMathA3_2.gif'} alt="loading..." />
            </Section>
        </Section>
    )
}

// PiSutb6iCYY