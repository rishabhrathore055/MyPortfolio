import React from 'react';
import { ImHtmlFive, ImCss3 } from "react-icons/im";
import { FaFileCode, FaGlobe, FaPython } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { SiJava, SiCplusplus, SiAdobexd, SiCodio, SiHtml5, SiCss3, SiReact, SiJavascript, SiBootstrap, SiTailwindcss, SiJupyter, SiGit, SiGithub, SiFigma, SiAdobeillustrator, SiCanva, SiPostman } from "react-icons/si";
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Langauges <FaFileCode size="1.7rem" /></ListTitle>
          <ListParagraph>
            <SiCodio size="1.4rem" /> C <br />
            <SiCplusplus size="1.4rem" /> C++ <br />
            <FaPython size="1.4rem" /> Python <br />
            <SiJava size="1.7rem" /> Java <br />
            <SiJavascript size="1.4rem" /> JavaScript <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Web-Dev <FaGlobe size="1.7rem" /></ListTitle>
          <ListParagraph>

            <SiHtml5 size="1.4rem" /> HTML5 <br />
            <SiCss3 size="1.4rem" /> CSS3 <br />
            <SiReact size="1.4rem" /> React Js <br />
            <SiBootstrap size="1.4rem" /> Bootstrap <br />
            <SiTailwindcss size="1.4rem" /> Tailwind CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Tools <VscTools size="1.7rem" /></ListTitle>
          <ListParagraph>
            <SiGit size="1.4rem" /> Git <br />
            <SiGithub size="1.4rem" /> Github<br />
            <SiPostman size="1.4rem" /> PostMan<br />
            <SiFigma size="1.4rem" /> Figma <br />
            <SiAdobeillustrator size="1.4rem" /> Adobe Illustrator<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
