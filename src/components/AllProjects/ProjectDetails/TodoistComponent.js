import React from 'react'
import { ProjectDivider, PlayBtn, GifImg, Img, Section, ProjectTitle, ProjectText, ProjectGridContainer, ProjectGridInfo } from './ProjectDetailStyles';
import { Todoist } from "../../../constants/constants"

export default function TodoistComponent() {
    return (
        <Section flex>
            <Img src='/images/ProjectImage/Todoist.png' />
            <br />
            <ProjectDivider />
            <ProjectTitle>Todoist</ProjectTitle>
            <ProjectGridContainer>
                <ProjectGridInfo >
                    <ProjectText main >Genre</ProjectText>
                    <ProjectText>Web Application</ProjectText>
                    <ProjectText main >Description</ProjectText>
                    <ProjectText desc >{Todoist.description}</ProjectText>
                </ProjectGridInfo>
                <ProjectGridInfo >
                    <ProjectText main >Time</ProjectText>
                    <ProjectText>2020 Summer(1 month)</ProjectText>
                    <ProjectText main >Technologies Used</ProjectText>
                    <ProjectText>React.js &nbsp; SCSS &nbsp; Firebase &nbsp; React Testing Library</ProjectText>
                    <ProjectText partner> independent project </ProjectText>
                </ProjectGridInfo>
            </ProjectGridContainer>
            <PlayBtn onClick={() => window.open("https://tender-villani-ad7b38.netlify.app/", '_blank')}>Try it now!</PlayBtn>
            <br />
            {/* <ProjectText main >MAIN FEATURE 1</ProjectText> */}
            {/* <Section nopadding row>
                <GifImg src={'/images/ProjectDetailMedia/gifExample.gif'} alt="loading..." />
                <GifImg src={'/images/ProjectDetailMedia/gifExample.gif'} alt="loading..." />
            </Section> */}
            <ProjectText main >Sidebar(Projects, Add Project)</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/Todoist/Todoist_Gif_1.gif'} />
            <ProjectText main >Content(Tasks, Add Task, Retrieve Task)</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/Todoist/Todoist_Gif_2.gif'} />
            <ProjectText main >Test Coverage Report</ProjectText>
            <GifImg big src={'/images/ProjectDetailMedia/Todoist/Todoist_Img_1.png'} />
            <GifImg big src={'/images/ProjectDetailMedia/Todoist/Todoist_Img_2.png'} />
        </Section>
    )
}
