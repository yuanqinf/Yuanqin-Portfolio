import React, { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';
import { IoChevronUpOutline } from 'react-icons/io5';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer, UpButton } from './FooterStyles';

const Footer = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, [])

  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:949-981-4762">+1 (949)-981-4762</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:fanyuanqin96@gmail.com">fanyuanqin96@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            © 2022 | Designed and Created By Yuanqin Fan
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/yuanqinf' target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/yuanqinf/' target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://aaronfan.itch.io/' target="_blank">
            <FaItchIo title="itch.io" size="2.6rem" />
          </SocialIcons>
        </SocialContainer>
        <UpButton href={"#"}>
          <IoChevronUpOutline
            style={{ display: visible ? 'inline' : 'none' }} />
        </UpButton>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;