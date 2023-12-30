import "./Projects.css"
import ProjectContainer from "../../ProjectContainer/ProjectContainer";
import chihiro from "../../../assets/Chihiro.png"
const Projects = () => {
    return ( 
        <section id="Projects">
            <div className="projectWrap">
            <ProjectContainer image={chihiro} text={"Este projeto é uma Landing page dedicada para o filme A Viagem de Chihiro, feito a partir de um projeto figma da Codelândia"}></ProjectContainer>
            <ProjectContainer image={chihiro} text={"Este projeto é uma Landing page dedicada para o filme A Viagem de Chihiro, feito a partir de um projeto figma da Codelândia"}></ProjectContainer>
            <ProjectContainer image={chihiro} text={"Este projeto é uma Landing page dedicada para o filme A Viagem de Chihiro, feito a partir de um projeto figma da Codelândia"}></ProjectContainer>
            </div>
        </section>
     );
}
 
export default Projects;