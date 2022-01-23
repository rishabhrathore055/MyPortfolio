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
  A passionate Python programmer or Data Science and Machine learning enthusiast.
Currently Learning Data Analytics,Data Structure & algorithms, SQL, Pandas, Matplotlib. I also love to contribute to Open Sources.
  </SectionText>
  <Button onClick={()=>window.location = 'https://twitter.com/rishabh_055'}>Know More</Button>
  </LeftSection>
  </Section>
);

export default Hero;