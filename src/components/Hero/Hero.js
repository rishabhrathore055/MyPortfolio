import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
     Hello There! <br/>
     I'm Rishabh Rathore 
     </SectionTitle>
  <SectionText>
  A Sophomore at IIST, Indore. Completing B.Tech In Information Technology.
  I'm a learning enthusiast or a fast learner having a deep interest in Data Science, Machine Learning, and its surrounding fields.
  </SectionText>
  <Button onClick={()=>window.location = 'https://twitter.com/rishabh_055'}>Know More</Button>
  </LeftSection>
  </Section>
);

export default Hero;