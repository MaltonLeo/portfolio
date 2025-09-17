import styled from "styled-components";

export const AboutWrap = styled.div`
  max-width: 1080px; margin: 0 auto; padding: 40px 20px;
`;
export const SectionTitle = styled.h2`
  font-size: 1.9rem; margin: 0 0 18px;
`;
export const TwoCol = styled.div`
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: start;
  @media (max-width: 880px){ grid-template-columns: 1fr; }
`;
export const Bio = styled.div`
  color: #50535a; line-height: 1.8;
  p{ margin: 0 0 14px; }
`;
export const Skills = styled.div`display: grid; gap: 12px;`;
export const Skill = styled.div``;
export const SkillName = styled.div`font-weight: 600; margin-bottom: 6px;`;
export const Bar = styled.div`
  height: 10px; background: #e0e7f3ff; border-radius: 999px; overflow: hidden;
`;
export const BarFill = styled.div`
  height: 100%; width: ${({w})=>w || 0}%;
  background: linear-gradient(90deg,#6c63ff,#00c2ff);
  border-radius: 999px; transition: width .6s ease;
`;

/* Timeline */
export const Timeline = styled.div`
  margin-top: 28px; position: relative;
  &:before{
    content:""; position:absolute; left:10px; top:0; bottom:0; width:2px; background:#e6e8ee;
  }
`;
export const Item = styled.div`position: relative; padding-left: 28px; margin: 18px 0;`;
export const Dot = styled.span`
  position:absolute; left:2px; top:6px; width:16px; height:16px; border-radius:50%;
  background:#fff; border:3px solid #6c63ff;
`;
export const ItemContent = styled.div`
  h4{ margin:0 0 4px; }
  small{ color:#7a7f88; }
  p{ margin:8px 0 0; color:#555; }
`;
