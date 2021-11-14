import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  Box,
  Boxes,
  BoxNum,
  BoxText,
} from "./AcomplishmentsStyles";

const data = [
  {
    title:30,
    text: "Open Source Contributions"
  },
  { title: 220, 
    text: "Twitter Followers"},
  { title: 45,
    text: "Github Followers"},
  { title: 2500, 
    text: "Instagram Followers" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.title}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
