import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { DiCssdeck, DiGithubAlt, DiZend } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex",alignItems: "center", color: "White"}}>
          <DiGithubAlt size = "6rem"/> <Span>Rishabh Rathore</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#project">
          <NavLink >Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
    
      <SocialIcons href="https://www.linkedin.com/in/Rishabhrathore">
        <AiFillLinkedin size="2.8rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.twitter.com/rishabh_055">
        <AiFillTwitterSquare size="2.8rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/rishabhrathore055">
        <AiFillGithub size="2.8rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com/_rishu_007">
        <AiFillInstagram size="2.8rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);
export default Header;
