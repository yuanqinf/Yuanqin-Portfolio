import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, MainIcon } from './HeaderStyles';

const resumeLink = "https://drive.google.com/file/d/1uXwPcPLlJoP8voyvCsgKLUGQ5dGPZXa1/view?usp=sharing";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "10px" }}>
          <MainIcon size="2.5rem" /> <Span>&nbsp;Yuanqin.Fan</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <a href={resumeLink} target="_blank">
          <NavLink>Work</NavLink>
        </a>
      </li>
      {/* <li>
        <Link href={"#tech"}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li> */}
      <li>
        <a href={resumeLink} target="_blank">
          <NavLink>About</NavLink>
        </a>
      </li>
      <li>
        <a href={resumeLink} target="_blank">
          <NavLink>
            Resume
            <AiOutlineDownload size="1.2rem" />
          </NavLink>
        </a>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'>
        <AiFillGithub title="Github" size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin title="Linkedin" size="3rem" />
      </SocialIcons>
      <SocialIcons href='https://aaronfan.itch.io/'>
        <FaItchIo title="itch.io" size="2.6rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
