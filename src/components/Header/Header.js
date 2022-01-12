import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, MainIcon } from './HeaderStyles';

const resumeLink = "https://drive.google.com/file/d/1uXwPcPLlJoP8voyvCsgKLUGQ5dGPZXa1/view?usp=sharing";

function Header() {
  const [currentActivatedTab, setCurrentActivatedTab] = useState("");

  useEffect(() => {
    setCurrentActivatedTab(window.location.pathname)
  }, [])

  return (
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
          <Link href={'/work'}>
            <NavLink main={currentActivatedTab === "/work" ? "main" : ""}>
              Work
            </NavLink>
          </Link>
        </li>
        {/* <li>
          <Link href={"#tech"}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li> */}
        <li>
          <Link href={'/about'}>
            <NavLink main={currentActivatedTab === "/about" ? "main" : ""}>
              About
            </NavLink>
          </Link>
        </li>
        <li>
          <a href={resumeLink} target="_blank">
            <NavLink>
              Resume
              <HiDownload size="1.2rem" />
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
  )
}
export default Header;
