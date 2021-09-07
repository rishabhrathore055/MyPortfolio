import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillTwitterSquare } from 'react-icons/ai';
import {FaPhone,FaEnvelope,FaDev} from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
      <LinkColumn>
      <LinkTitle>Call  <FaPhone Size="1.4rem"/></LinkTitle>
      <LinkItem href="tel:877-017-0974">877-017-0974</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email <FaEnvelope size="1.3rem" /></LinkTitle>
      <LinkItem href="mailto:rishabhrathore055@gmail.com">rishabhrathore055@gmail.com</LinkItem>
      </LinkColumn>
     </LinkList>
    <SocialIconsContainer>
      <CompanyContainer>
        <Slogan>Work Hard Until Your Signature Becomes Autograph</Slogan>
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://www.linkedin.com/in/Rishabhrathore">
        <AiFillLinkedin size="2.8rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.twitter.com/rishabh_055">
        <AiFillTwitterSquare size="2.8rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/rishbahrathore055">
        <AiFillGithub size="2.8rem"/>
      </SocialIcons>
      <SocialIcons href="https://dev.to/rishabh055/">
        <FaDev size="2.8rem"/>
      </SocialIcons>
      </SocialContainer>
    </SocialIconsContainer>
   </FooterWrapper>
  );
};

export default Footer;
