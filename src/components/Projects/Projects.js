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
      {projects.map(({ id, image, title, description, tags, visit }) => (
        <BlogCard key={id}>
          <Link href={visit}><Img src={image} /></Link>
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
            <Link href={visit}>
              <ExternalLinks > View More </ExternalLinks>
            </Link>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
    <br />
  </Section>
);

export default Projects;