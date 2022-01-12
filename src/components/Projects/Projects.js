import React from 'react';
import Link from 'next/link';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, MoreItem } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { FiMoreHorizontal } from 'react-icons/fi';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle >Selected Projects</SectionTitle>
    <Link href={'/work'}>
      <MoreItem>
        more projects &nbsp;
        <FiMoreHorizontal size="1rem" />
      </MoreItem>
    </Link>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <a href={visit}><Img src={image} /></a>
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