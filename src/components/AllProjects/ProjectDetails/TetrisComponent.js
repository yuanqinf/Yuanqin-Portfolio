import React from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';
import { Tetris } from "../../../constants/constants"

export default function TetrisComponent() {
    return (
        <Section flex>
            <Img src='/images/ProjectImage/Tetris.png' />
            <br />
            <ProjectDivider />
            <ProjectTitle>Tetris</ProjectTitle>
            <ProjectGridContainer>
                <ProjectGridInfo >
                    <ProjectText main >Genre</ProjectText>
                    <ProjectText>Web Game</ProjectText>
                    <ProjectText main > Description </ProjectText>
                    <ProjectText desc > {Tetris.description} </ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2020 Spring(1 week)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>React.js &nbsp; CSS</ProjectText>
                    <ProjectText partner> independent project </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://serene-jennings-a92703.netlify.app/", '_blank')}>Try it now!</PlayBtn>
            <br />
            <ProjectText main >Gameplay Screenshots</ProjectText>
            <Section nopadding row>
                <GifImg big src={'/images/ProjectDetailMedia/Tetris/Tetris_Img1.png'} />
                <GifImg big src={'/images/ProjectDetailMedia/Tetris/Tetris_Img2.png'} />
            </Section>
        </Section>
    )
}
