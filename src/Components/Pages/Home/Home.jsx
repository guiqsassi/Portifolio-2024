import "./Home.css"
import picture from "../../../assets/Picture.png"
import github from "../../../assets/github.png"
import nodejs from "../../../assets/nodejs.png"
import linkeding from "../../../assets/linkeding.png"
import javascript from "../../../assets/javascript.png"
import spring from "../../../assets/SpringBoot.png"
import css from "../../../assets/css.png"
import html from "../../../assets/html.png"
import git from "../../../assets/git.png"
import React from "../../../assets/React.png"
import mySql from "../../../assets/mysql.png"
import mongo from "../../../assets/mongo.png"
import docker from "../../../assets/docker.png"
import figma from "../../../assets/figma.png"
import whatsapp from "../../../assets/WhatsApp.png"
import java from "../../../assets/java.png"
import styledCompo from "../../../assets/styledComponents.png"
import { useSelector } from "react-redux"

import Tag from "../../Tag/Tags"
const Home = () => {
    const {toggle} = useSelector((state)=>state.darkModeReducer)
    return ( 
        <section id="home" className="home">
        <div className="profile">
        <img src={picture} alt="" />
        <div className={`personalInfo ${toggle? "darkMode-Container":null}`}>
            <h1>Guilherme Q. Sassi</h1>
            <h2>Desenvolvedor Fullstack</h2>
            <div className="socialMedia">
                <a href="https://www.linkedin.com/in/guiqsassi" target="blank">
                    <img src={linkeding} alt="" />
                </a>
                <a href="https://github.com/guiqsassi" target="blank">
                    <img src={github} alt="" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=5548991085884&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portfolio" target="blank">
                    <img src={whatsapp} alt="" />
                </a>
            </div>
        </div>
        </div>
        <div className={`about ${toggle? "darkMode-Container":null}`}>
            <h1>Sobre:</h1>
            <p>Olá, meu nome é Guilherme e eu sou um desenvolvedor fullstack!! <br /> Eu comecei a estudar programação há aproximadamente 2 anos, quando me apaixonei imensamente pela área da tecnologia. Estou sempre em busca de mais experiências e aprendizados como programador. <br />
Atualmente estou trabalhando em um projeto na comunidade Bichinhos da TI chamado “Aprender ensinando” e estou atuando como FrontEnd Developer voluntário.</p>
            <h1>Tecnologias:</h1>
            <div className="tags">
                <Tag img={java} text={"java"} color="#2B3F6C"></Tag>
                <Tag img={spring} text={"SpringBoot"} color="#77BC1F"></Tag>
                <Tag img={javascript} text={"Javascript"} color="rgba(0, 0, 0, 0.54)"></Tag>
                <Tag img={nodejs} text={"Node.Js"}></Tag>
                <Tag img={html} text={"Html"} color="rgba(241, 101, 41, 0.69)"></Tag>
                <Tag img={css} text={"Css"} color="rgba(21, 114, 182, 0.79)"></Tag>
                <Tag img={React} text={"React"} color="#23C2EE"></Tag>
                <Tag img={styledCompo} text={"SC"} color="#C66767"></Tag>
                <Tag img={git} text={"Git"} color="rgba(241, 101, 41, 0.69)"></Tag>
                <Tag img={mySql} text={"mySql"} color="#1486DA"></Tag>
                <Tag img={mongo} text={"MongoDb"} color="#57AE47"></Tag>
                <Tag img={docker} text={"Docker"} color="#00ACD3"></Tag>
                <Tag img={figma} text={"Figma"} color="rgba(0, 0, 0, 0.54)"></Tag>

            
            
            </div>
        </div>
        </section>
     );
}
 
export default Home;