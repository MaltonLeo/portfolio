
// src/styles/homeStyles.js
import styled, { keyframes } from "styled-components";

/* Har ikki qatlam bir-biriga asta o‘tadi */
const fadeInOut = keyframes`
  0%   { opacity: 0; transform: scale(1); }
  45%  { opacity: 1; transform: scale(1.02); }
  55%  { opacity: 1; transform: scale(1.02); }
  100% { opacity: 0; transform: scale(1); }
`;

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  padding: 120px 20px 80px;
  background: #0f172a; /* orqa fon (sezilm. to'q rang) */
  isolation: isolate;  /* qatlamlar to‘g‘ri aralashsin */
`;

/* 2 ta gradient qatlam: biri ko‘rinib, biri so‘nib turadi */
export const GradientStage = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  filter: blur(48px) saturate(130%);
`;

/* 1-qavat */
export const G1 = styled.div`
  position:absolute; inset:-20%;
  background: linear-gradient(
    135deg,
    #d5d1f5ff 0%,
    #d4e9f6ff 50%,
    #d9f1ebff 100%
  );
  animation: ${fadeInOut} 16s ease-in-out infinite;
`;

/* 2-qavat (boshqa rang palitrasi/yo‘nalishi) */
export const G2 = styled.div`
  position:absolute; inset:-20%;
  background: linear-gradient(
    200deg,
    #e0eaf0ff 0%,
    #d5d2f3ff 55%,
    #f7eaf1ff 100%
  );
  animation: ${fadeInOut} 16s ease-in-out infinite;
  animation-delay: -8s; /* G1 bilan navbatma-navbat o‘tsin */
`;

/* ixtiyoriy: nozikkina noise bandingni yashiradi */
export const Grain = styled.div`
  position:absolute; inset:0; z-index:-1; pointer-events:none;
  opacity:.08; mix-blend-mode:soft-light;
  background-image:
    url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'>\
      <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/></filter>\
      <rect width='100%' height='100%' filter='url(#n)' opacity='.3'/>\
    </svg>");
  background-size: 220px 220px;
  animation: grainMove 8s linear infinite;
  @keyframes grainMove {
    from { transform: translate3d(0,0,0); }
    to   { transform: translate3d(-10px,-8px,0); }
  }
`;

/* Qolgan Title/Subtitle/... o‘zingizdagi kabi */


// const wave = keyframes`
//   0% { background-position: 0 0; }
//   100% { background-position: 200% 0; }
// `;

// export const HeroSection = styled.section`
//   position: relative;
//   overflow: hidden;
//   display:flex; flex-direction:column; align-items:center; text-align:center;
//   padding: 120px 20px 80px;
//   min-height: 80vh;
//   background: #f7f8fa; /* fallback */

//   background: linear-gradient(270deg, #c9c6f3ff, #e4e8e9ff, #e2e3e6ff);
//   background-size: 200% 200%;
//   animation: ${wave} 15s ease infinite;
// `;

// /* 🔵 Orqa fon uchun qatlam */
// export const Bg = styled.div`
//   position: absolute; inset: 0;
//   z-index: 0; pointer-events: none;
//   filter: blur(40px) saturate(140%);
//   opacity: 0.55;

//   /* ikkita yumshoq gradient “blob” */
//   &::before, &::after{
//     content:""; position:absolute; width:55vmax; height:55vmax; border-radius:50%;
//     background: radial-gradient(circle at 30% 30%, #a6a4c7ff, transparent 60%);
//     animation: ${wave} 16s ease-in-out infinite;
//   }
//   &::after{
//     left:auto; right:-15vmax; top:10vmax;
//     background: radial-gradient(circle at 60% 40%, #a5c7d2ff, transparent 60%);
//     animation-duration: 22s;
//     animation-delay: -3s;
//   }

//   /* harakatdan bezovta bo‘lganlar uchun */
//   @media (prefers-reduced-motion: reduce){
//     &::before, &::after{ animation: none; }
//   }
// `;

/* Qolganlari (avval bor bo‘lganlar) yuqorida qoladi… */


export const Title = styled.h1`
  font-size: 2.8rem;
  margin-top: 20px;
  color: #333;
`;

export const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #666;
  margin-bottom: 30px;
`;


export const CTARow = styled.div`
  display:flex; 
  gap:12px; 
  flex-wrap:wrap; 
  justify-content:center; 
  margin:8px 0 28px;
`;

export const CTAButton = styled.a`
  display:inline-block; 
  padding:12px 22px; 
  border-radius:10px; 
  text-decoration:none;
  background:#6c63ff; 
  color:#fff; 
  font-weight:600; 
  transition:transform .15s ease, box-shadow .15s ease;
  &:hover 
  { 
  transform:translateY(-2px); 
  box-shadow:0 6px 18px rgba(108,99,255,.3); 
  }
`;

export const TechStackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
`;



export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #6c63ff;
`;
export const TechItem1 = styled.li`
  background-color: #e0e0e0;
  color: #333;
  padding: 8px 16px;
  border-radius: 20px;
  list-style: none;
  &:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`
export const TechItem2 = styled.li`
  background-color: #e0e0e0;
  color: #333;
  padding: 8px 16px;
  border-radius: 20px;
  list-style: none;
   &:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`
export const TechItem3 = styled.li`
  background-color: #e0e0e0;
  color: #333;
  padding: 8px 16px;
  border-radius: 20px;
  list-style: none;
   &:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`
export const TechItem4 = styled.li`
  background-color: #e0e0e0;
  color: #333;
  padding: 8px 16px;
  border-radius: 20px;
  list-style: none;
   &:hover {
    background-color: #fafafa;
    transform: scale(1.05);
    transition: 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  }
`
export const Intro = styled.p`
  max-width:720px; color:#4a4a4a; line-height:1.75; margin:0 0 28px;
`;

export const GhostButton = styled.a`
  display:inline-block; padding:12px 22px; border-radius:10px; text-decoration:none;
  border:2px solid #6c63ff; color:#6c63ff; font-weight:600; background:#fff;
  &:hover { background:#f0efff; }
`;

export const Socials = styled.div`
  display:flex; 
  gap:16px; 
  flex-wrap:wrap; 
  justify-content:center; 
  margin-top:6px;
  a{ 
  color:#555; 
  text-decoration:none; 
  border-bottom:1px dashed transparent; }
  a:hover{ border-bottom-color:#999; }
`;

