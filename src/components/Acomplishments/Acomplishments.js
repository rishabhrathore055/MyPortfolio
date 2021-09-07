import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Contributions'},
  { number: 80, text: 'Twitter Followers', },
  { number: 40, text: 'Github Followers', },
  { number: 2500, text: 'Instagram Followers', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle> Persnoal Achievements</SectionTitle>
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
