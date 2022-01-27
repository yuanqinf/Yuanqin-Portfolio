import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaItchIo } from 'react-icons/fa';
import { HiOutlineLink } from 'react-icons/hi';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, MainIcon, DownloadIcon } from './HeaderStyles';

const resumeLink = "https://drive.google.com/file/d/1TedwotfCDZKd_xtziZjrO206qh2eoi6U/view?usp=sharing"

function Header() {
  const [currentActivatedTab, setCurrentActivatedTab] = useState("");
  const [width, setWidth] = useState(0);
  const isMobile = (width <= 768);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    handleWindowSizeChange();
    setCurrentActivatedTab(window.location.pathname)
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
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
              Resume&nbsp;
              <HiOutlineLink size={isMobile ? "0rem" :"1.2rem"} />
            </NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href='https://github.com/yuanqinf' target="_blank">
          <AiFillGithub title="Github" size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/yuanqinf/' target="_blank">
          <AiFillLinkedin title="Linkedin" size="3rem" />
        </SocialIcons>
        <SocialIcons href='https://aaronfan.itch.io/' target="_blank">
          <FaItchIo title="itch.io" size="2.6rem" />
        </SocialIcons>
      </Div3>
    </Container>
  )
}
export default Header;
