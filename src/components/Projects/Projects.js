import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, MoreItem } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { FiMoreHorizontal } from 'react-icons/fi';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle >Selected Projects</SectionTitle>
    <MoreItem href="https://google.com">
      more projects &nbsp;
      <FiMoreHorizontal size="1rem" />
    </MoreItem>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title> {title} </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <br />
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}> {tag} </Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}> View More </ExternalLinks>
            {/* <ExternalLinks href={source}> Source </ExternalLinks> */}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <br />
  </Section>
);

export default Projects;