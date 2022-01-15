import React from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';
import { PopTask } from "../../../constants/constants"

export default function PopTaskComponent() {
    return (
        <Section flex>
            <Img src='/images/ProjectImage/PopTask.png' />
            <br />
            <ProjectDivider />
            <ProjectTitle>PopTask</ProjectTitle>
            <ProjectGridContainer>
                <ProjectGridInfo >
                    <ProjectText main >Genre</ProjectText>
                    <ProjectText>Web Application</ProjectText>
                    <ProjectText main >Description</ProjectText>
                    <ProjectText desc >{PopTask.description}</ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2022 Spring(1 month)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>React.js &nbsp; Django &nbsp; AllAuth &nbsp; AWS &nbsp; TailwindCSS</ProjectText>
                    <ProjectText partner>collaborated with Paul and Chia-Ying </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://poptask.fun/", '_blank')}>Try it now!</PlayBtn>
            <br />
            {/* <ProjectText main >MAIN FEATURE 1</ProjectText>
            <Section nopadding row>
                <GifImg src={'/images/ProjectDetailMedia/gifExample.gif'} alt="loading..." />
                <GifImg src={'/images/ProjectDetailMedia/gifExample.gif'} alt="loading..." />
            </Section> */}
            <ProjectText main >Group Management (create group / add member)</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/Poptask/poptaskGif_1.gif'} />
            <ProjectText main >Task Management (push&edit task / pop task to calendar-view)</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/Poptask/poptaskGif_2.gif'} />
            <ProjectText main >Leaderboard (done task and earn score in leaderboard)</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/Poptask/poptaskGif_3.gif'} />
            
        </Section>
    )
}
