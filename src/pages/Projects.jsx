import React from "react";
import ProjectCard from "../components/ProjectCard";
import { Grid } from "../styles/projectstyle";

export default function Projects() {
  return (
    <div style={{maxWidth:1080, margin:"0 auto", padding:"40px 20px"}}>
      <h2 style={{margin:"0 0 18px"}}>Projects</h2>
      <p style={{margin:"0 0 24px", color:"#666"}}>
        A selection of work. More on my GitHub.
      </p>

      <Grid>
        <ProjectCard
          title="Camping App"
          desc="Listings + filters + map."
          href="https://camping.malton.uz/"
          tech={["React","Node","MongoDB"]}
          badge="Featured"
        />
        <ProjectCard
          title="Admin Dashboard"
          desc="Auth, CRUD, charts."
          href="https://app.malton.uz/"
          
          tech={["React","Express","JWT"]}
        />
        <ProjectCard
          title="Portfolio v2"
          desc="Vite + styled-components."
          href="https://github.com/youruser/portfolio-v2"
          tech={["React","Vite","SC"]}
        />
        <ProjectCard
          title="Video Call"
          desc="Face detection ,video call "
          href="https://github.com/MaltonLeo/facecall.git"
          tech={["WebRTC","socket.io","Reacts"]}
        />
      </Grid>
    </div>
  );
}
