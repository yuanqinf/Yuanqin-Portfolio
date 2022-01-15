import React, {useState, useEffect} from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';
import { PaperCrane } from "../../../constants/constants"
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

export default function PaperCraneComponent() {
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
            <Img src='/images/ProjectImage/PaperCrane.png' />
            <br />
            <ProjectDivider />
            <ProjectTitle>Paper Crane</ProjectTitle>
            <ProjectGridContainer>
                <ProjectGridInfo >
                    <ProjectText main >Genre</ProjectText>
                    <ProjectText>Web Application</ProjectText>
                    <ProjectText main >Description</ProjectText>
                    <ProjectText desc >{PaperCrane.description}</ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2020 Fall(2 weeks)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>Unity3D &nbsp; OpenCV </ProjectText>
                    <ProjectText partner>collaborated with shiwen, Mincan, Tianyi and Lauren </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://aaronfan.itch.io/papercrane", '_blank')}>Try it now!</PlayBtn>
            <br />
            <ProjectText main >Gameplay Video</ProjectText>
            <YouTube videoId="LiJcNJeZ7VM" opts={!isMobile ? optsBig : optsSmall}/>

            <ProjectText main >Voice Detection</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/PaperCrane/PaperCrane_Gif_1.gif'} alt="loading..." />
        </Section>
    )
}
