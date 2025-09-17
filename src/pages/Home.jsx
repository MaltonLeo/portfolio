import React from "react";
import {
  HeroSection,
  Title,
  Subtitle,
  CTAButton,
  TechStackList,
  Image,
  TechItem1,
  TechItem2,
  TechItem3,
  TechItem4,
  Intro,
  CTARow,
  GhostButton,
  Socials,
  GradientStage,
  G1,
  G2,
  Grain,
} from "../styles/homestyle";
import photor from "../photos/men3.jpg"


function HomeComponent() {
  return (
    <HeroSection>
      <GradientStage>
        <G1 />
        <G2 />
        <Grain /> {/* ixtiyoriy, rang “banding”ini yo‘qotadi */}
      </GradientStage>
      <Image src={photor} alt="Sherzod's photo" />
      <Title>Hi, I'm Sherzod</Title>
      <Subtitle>Fullstack Developer | React & Node.js Specialist</Subtitle>
      <Intro>
        I build clean, performant web apps and APIs. I love turning business needs
        into simple, maintainable solutions using React, Node.js and MongoDB.
      </Intro>
      <CTARow>
        <CTAButton href="/contact">Contact Me</CTAButton>
        <CTAButton href="/CVEnglish.pdf" download>
          Download CV (EN)
        </CTAButton>
        <GhostButton href="/CVKorean.pdf" download>
          CV 내려받기 (KOR)
        </GhostButton>
      </CTARow>
      <Socials>
        <a href="https://github.com/MaltonLeo" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/sherzod-khudaynazarov-681431218/" target="_blank">LinkedIn</a>
        <a href="mailto:khudaynazrovs@gmail.com">Email</a>
      </Socials>

      <TechStackList>
        <TechItem1>React</TechItem1>
        <TechItem2>Node.js</TechItem2>
        <TechItem3>MongoDB</TechItem3>
        <TechItem4>AWS</TechItem4>
      </TechStackList>
    </HeroSection>
  );
}

export default HomeComponent;
