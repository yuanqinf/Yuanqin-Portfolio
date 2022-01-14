import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { HiOutlineViewGrid } from 'react-icons/hi';
import { DiJavascript } from 'react-icons/di';
import { IoGameControllerOutline } from 'react-icons/io5';
import WebProject from './WebProject';
import GameProject from './GameProjects';
import {SectionText} from './AllProjectsStyles';

function AllProjects() {
    return (
        <Section>
            <SectionDivider />
            <SectionTitle > <HiOutlineViewGrid size="3rem" /> What I've been up to</SectionTitle>
            <br />
            <SectionText>
                &nbsp;Web Projects <DiJavascript size="2rem"/>
            </SectionText>
            <WebProject />
            <br />
            <SectionText>
                &nbsp;Game Projects <IoGameControllerOutline size="2rem"/>
            </SectionText>
            <GameProject />
            {/* <SectionText>
                &nbsp;Graphic Projects < RiComputerLine size="1.5rem"/>
            </SectionText> */}
        </Section>
    )
};

export default AllProjects;