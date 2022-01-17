import React, { useState, useEffect } from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';
import { Shopifight } from "../../../constants/constants"
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

export default function ShopifightComponent() {
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
            <Img src='/images/ProjectImage/Shopifight.jpg' />
            <br />
            <ProjectDivider />
            <ProjectTitle>Shopi-fight</ProjectTitle>
            <ProjectGridContainer>
                <ProjectGridInfo >
                    <ProjectText main >Genre</ProjectText>
                    <ProjectText>3D Battle Royale Style Action Game</ProjectText>
                    <ProjectText main >Description</ProjectText>
                    <ProjectText desc >{Shopifight.description}</ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2021 Fall(3 weeks)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>Unity3D &nbsp; Photon Engine</ProjectText>
                    <ProjectText partner>collaborated with Peter, Sophia, Shanshan and Leo </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://aaronfan.itch.io/shopi-fight", '_blank')}>Try it now!</PlayBtn>
            <br />
            <ProjectText main >Demo Video</ProjectText>
            <YouTube videoId="XJa3slhVv0U" opts={!isMobile ? optsBig : optsSmall}/>
        </Section>
    )
}

// https://youtu.be/XJa3slhVv0U