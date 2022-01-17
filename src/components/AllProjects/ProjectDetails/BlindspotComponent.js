import React, {useState, useEffect} from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';
import { Blindspot } from "../../../constants/constants"
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


export default function BlindspotComponent() {
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
            <Img src='/images/ProjectImage/BlindSpot.png' />
            <br />
            <ProjectDivider />
            <ProjectTitle>BlindSpot</ProjectTitle>
            <ProjectGridContainer>
                <ProjectGridInfo >
                    <ProjectText main >Genre</ProjectText>
                    <ProjectText>2D Web-Based Interactive Story</ProjectText>
                    <ProjectText main >Description</ProjectText>
                    <ProjectText desc >{Blindspot.description}</ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2021 Fall(3 months)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>Unity3D &nbsp; WebGl</ProjectText>
                    <ProjectText partner>collaborated with Shelley, Jamie, Michael and Haiyun </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://projectblindspot.itch.io/livedemo", '_blank')}>Try it now!</PlayBtn>
            <br />
            <ProjectText main >Demo Video</ProjectText>
            <YouTube videoId="RGnZu5F_pak" opts={!isMobile ? optsBig : optsSmall}/>
        </Section>
    )
}
