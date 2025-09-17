import React from "react";
import {
  AboutWrap, SectionTitle, TwoCol, Bio, Skills, Skill,
  SkillName, Bar, BarFill, Timeline, Item, Dot, ItemContent
} from "../styles/aboutstyle";

export default function About() {
  return (
    <AboutWrap>
      <SectionTitle>About me</SectionTitle>

      <TwoCol>
        <Bio>
          <p>
            I’m a full-stack developer focused on building clean, performant web apps.
            I enjoy solving product problems and collaborating with teams.
          </p>
          <p>
            Core stack: <b>React</b>, <b>TypeScript</b>, <b>Node.js</b>, <b>MongoDB</b>.
          </p>
        </Bio>

        <Skills>
          <Skill>
            <SkillName>React</SkillName>
            <Bar><BarFill w={90} /></Bar>
          </Skill>
          <Skill>
            <SkillName>TypeScript</SkillName>
            <Bar><BarFill w={85} /></Bar>
          </Skill>
          <Skill>
            <SkillName>Node.js</SkillName>
            <Bar><BarFill w={80} /></Bar>
          </Skill>
          <Skill>
            <SkillName>MongoDB</SkillName>
            <Bar><BarFill w={75} /></Bar>
          </Skill>
        </Skills>
      </TwoCol>

      <Timeline>
        <Item>
          <Dot />
          <ItemContent>
            <h4>Freelance Developer</h4>
            <small>2023 – Present</small>
            <p>Building dashboards, APIs and landing pages for clients.</p>
          </ItemContent>
        </Item>
        <Item>
          <Dot />
          <ItemContent>
            <h4>Intern, Web Dev</h4>
            <small>2022 – 2023</small>
            <p>React + Express CRUD apps, auth and testing.</p>
          </ItemContent>
        </Item>
      </Timeline>
    </AboutWrap>
  );
}
