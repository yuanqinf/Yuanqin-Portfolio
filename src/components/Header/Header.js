import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';
import { AiOutlineAntDesign } from 'react-icons/ai';



import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <AiOutlineAntDesign size="2.5rem" /> <Span>&nbsp;Yuanqin</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={"#projects"}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#tech"}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#about"}>
          <NavLink>About</NavLink>
        </Link>
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
