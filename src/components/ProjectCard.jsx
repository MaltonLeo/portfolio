import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const Desc = styled.p`
  margin: 0;
  color: #555;
  font-size: 0.95rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tech = styled.span`
  background: #f1f3f7;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 0.8rem;
`;

const Link = styled.a`
  margin-top: auto;
  text-decoration: none;
  color: #6c63ff;
  font-weight: 600;
  &:hover { text-decoration: underline; }
`;

export default function ProjectCard({ title, desc, href, tech = [], badge }) {
  return (
    <Card>
      {badge && <span style={{color:"#6c63ff", fontSize:"0.8rem"}}>{badge}</span>}
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <TechList>
        {tech.map((t, i) => <Tech key={i}>{t}</Tech>)}
      </TechList>
      <Link href={href} target="_blank" rel="noreferrer">Project Link</Link>
    </Card>
  );
}
