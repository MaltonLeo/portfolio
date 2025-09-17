import styled from "styled-components"

export const HeaderWrapper = styled.div`
display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #a1a1caff;
  box-sizing: border-box; /* paddingni width ichida hisoblaydi */
  overflow-x: hidden;     /* horizontal scrollni oldini oladi */
`
export const Header1 = styled.div`
display :flex;
flex-direction: column;

`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #a1a1caff;
  color: white;

   a {
    text-decoration: none;     /* underline yo'q */
    color: white;              /* matn oq */
    background: transparent;   /* fon Nav’nikiga teng ko'rinadi */
    padding: 8px 12px;         /* hover zonasi */
    border-radius: 6px;
  }
`;
export const HomeWrapper = styled.div`
display: flex;
text-decoration: none;
`
export const AboutWrapper = styled.div`
display: flex;
`
export const ProjectWrapper = styled.div`
display: flex;
text-decoration: none;
`
export const ContactWrapper = styled.div`
display: flex;
text-decoration: none;
`