import "./Projects.css"
import ProjectContainer from "../../ProjectContainer/ProjectContainer";
import chihiro from "../../../assets/Chihiro.png"
import pokeDb from "../../../assets/PokeDbPrint.png"
import lorax from "../../../assets/Lorax.png"
import Calculator from "../../../assets/Calculator.png"
import CasaVerde from "../../../assets/casa_verde.png"
const Projects = () => {
    return ( 
        <section id="Projects">
            <div className="projectWrap">
            <ProjectContainer techs={["React", "Html", "Css"]} linkExec="https://chihiro-lp.vercel.app/" linkGit="https://github.com/guiqsassi/Chihiro-lp" image={chihiro} text={"Este projeto é uma Landing page dedicada para o filme A Viagem de Chihiro, feito a partir de um projeto figma da Codelândia"}></ProjectContainer>
            <ProjectContainer techs={["React", "Html", "Css"]} linkExec="https://lorax-landing-page.vercel.app/" linkGit="https://github.com/guiqsassi/Lorax_landing_page"  date="26/05/2023" text="Este projeto é uma Landing page dedicada ao filme Lorax" image={lorax}></ProjectContainer>
            <ProjectContainer techs={["React", "Html", "Css"]} linkExec="https://7-days-alura-day1-gz1sx0hvq-guiqsassi.vercel.app/" linkGit="https://github.com/guiqsassi/7DaysAlura-day1.git" date="09/08/2023" text="Este projeto é uma landing page criada a partir de um projeto figma durante o desafio 7 days of code da alura" image={CasaVerde}></ProjectContainer>
            <ProjectContainer techs={["React", "Html", "Css"]} date="28/06/2023" linkGit="https://github.com/guiqsassi/Pokedex" linkExec={"https://pokedb-six.vercel.app/"} image={pokeDb} text="Projeto realizado utilizando a api de pokedex"></ProjectContainer>
            <ProjectContainer techs={["React", "Html", "Css"]} date="23/05/2023" linkGit="https://github.com/guiqsassi/Calculator" linkExec={"https://calculator-swart-nine.vercel.app/"} image={Calculator} text="Este projeto é uma Calculadora feita em React"></ProjectContainer>
            </div>
        </section>
     );
}
 
export default Projects;