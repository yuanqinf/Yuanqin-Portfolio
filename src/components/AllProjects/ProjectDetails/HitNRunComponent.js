import React from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';
import { HitNRun } from "../../../constants/constants"

export default function HitNRunComponent() {
    return (
        <Section flex>
            <Img src='/images/ProjectImage/HitNRun.png' />
            <br />
            <ProjectDivider />
            <ProjectTitle>Hit.N.Run</ProjectTitle>
            <ProjectGridContainer>
                <ProjectGridInfo >
                    <ProjectText main >Genre</ProjectText>
                    <ProjectText>2D Platformer Game</ProjectText>
                    <ProjectText main >Description</ProjectText>
                    <ProjectText desc >{HitNRun.description}</ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2018 Summer(48 hours)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>Unity3D</ProjectText>
                    <ProjectText partner> Independent Project </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://aaronfan.itch.io/hit-n-run", '_blank')}>Try it now!</PlayBtn>
            <br />
            <ProjectText main >Gameplay Demo</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/HitNRun/HitNRun_Gif_1.gif'} alt="loading..." />
        </Section>
    )
}
