import React from "react";
import { Link } from "react-router-dom";
import { AboutWrapper, ContactWrapper, Header1, HeaderWrapper, HomeWrapper, Nav, ProjectWrapper } from "../styles/headerstyle";

function Header() {
  return (
    <Header1>
      <Nav>
        <HeaderWrapper>
          <HomeWrapper><Link to="/">Home</Link></HomeWrapper>
          <AboutWrapper><Link to="/about">About</Link></AboutWrapper>
          <ProjectWrapper><Link to="/projects">Projects</Link></ProjectWrapper>
          <ContactWrapper><Link to="/contact">Contact</Link></ContactWrapper>
        </HeaderWrapper>
      </Nav>
    </Header1>
  );
}


export default Header;
