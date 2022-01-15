import React from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';

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
                    <ProjectText>Web Application</ProjectText>
                    <ProjectText main >Description</ProjectText>
                    <ProjectText desc >Pop-task is a work assignment and management resource that improves your efficiency and motivations to work no matter in school, in company or even at home.</ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2022 Spring(1 month)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>React.js &nbsp; Django &nbsp; AllAuth &nbsp; AWS &nbsp; TailwindCSS</ProjectText>
                    <ProjectText partner>collaborated with Paul, Chia-Ying </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://poptask.fun/", '_blank')}>Try it now!</PlayBtn>
            <br />
            <ProjectText main >MAIN FEATURE 1</ProjectText>
            <Section nopadding row>
                <GifImg src={'/images/ProjectDetailMedia/gifExample.gif'} alt="loading..." />
                <GifImg src={'/images/ProjectDetailMedia/gifExample.gif'} alt="loading..." />
            </Section>
            <ProjectText main >MAIN FEATURE 2</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/gifExample.gif'} alt="loading..." />
        </Section>
    )
}
