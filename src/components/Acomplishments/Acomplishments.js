import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText,BoxButton } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Contributions',link : 'https://github.com/'},
  { number: 80, text: 'Twitter Followers',link : 'https://github.com/' },
  { number: 40, text: 'Github Followers', link : 'https://github.com/'},
  { number: 2500, text: 'Instagram Followers', link : 'https://github.com/' }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
    {data.map((card,index)=>(
      <Box key={index}>
      <BoxNum>{card.number}+</BoxNum>
      <BoxText>{card.text}</BoxText>
      </Box>
    ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
