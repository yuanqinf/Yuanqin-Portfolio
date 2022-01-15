import React from 'react'
import Link from 'next/link';
import { Img, GridContainer, TitleContent, BlogCard, HeaderThree, CardInfo, TagList, Tag, Hr, UtilityList, ExternalLinks } from './AllProjectsStyles.js'
import { webProjects } from '../../constants/constants';

export default function WebProject() {
    return (
        <React.Fragment>
            <GridContainer>
                {webProjects.map(({ id, image, title, description, tags, visit }) => (
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
        </React.Fragment>
    )
}
