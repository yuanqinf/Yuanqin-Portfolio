import React from 'react'
import { Img, GridContainer, TitleContent, BlogCard, HeaderThree, CardInfo, TagList, Tag, Hr, UtilityList, ExternalLinks } from './AllProjectsStyles.js'
import { webProjects } from '../../constants/constants';

export default function WebProject() {
    return (
        <React.Fragment>
            <GridContainer>
                {webProjects.map(({ id, image, title, description, tags, source, visit }) => (
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
        </React.Fragment>
    )
}
