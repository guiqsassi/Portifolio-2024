import "./ProjectContainer.css"
import picture from "../../assets/Picture.png"

import heart from "../../assets/heart.png"
import share from "../../assets/share.png"
import github from "../../assets/GitHub_.png"
import browser from "../../assets/Browser.png"

import browserDarkMode from "../../assets/BrowserDarkMode.png"
import heartDarkMode from "../../assets/HeartDarkMode.png"
import githubDarkMode from "../../assets/GithubDarkMode.png"
import shareDarkMode from "../../assets/shareDarkMode.png"



import { useState } from "react"
import { useSelector } from "react-redux"

const ProjectContainer = (props) => {
    const [copy, setCopyText] = useState("Copiar Link")
    const {toggle} = useSelector((state)=> state.darkModeReducer)

    const CopyToClipboard = ()=>{
        navigator.clipboard.writeText(props.linkExec)
        setCopyText("Link Copiado")
        setTimeout( ()=>{
            setCopyText("Copiar Link")
        }, 2000)
    }

    return ( 
        <div className={`ProjectContainer ${toggle? "darkMode-Container": null}`}>
            <div className="ProjectHeader">
            <div className="user">
                <img src={picture} alt="" />
                <h3>Guilherme Q. Sassi</h3>
            </div>
            <div className="date">
                <h3>19/12/2023</h3>
            </div>
            </div>
            <div className="imagePrincipal">
            <img src={props.image} alt="" />
            </div>
            <div className="widgets">
                <div className="webWidgets">
{               toggle?
                <>
                
                <img src={heartDarkMode} alt="" />
                <a target="blank" href={props.linkExec}>
                <img src={browserDarkMode} alt="" />

                </a>
                <a target="blank" href={props.linkGit}>
                <img src={githubDarkMode} alt="" />
                </a>
                </>
:   
                <>
                
                <img src={heart} alt="" />
                <a target="blank" href={props.linkExec}>
                <img src={browser} alt="" />

                </a>
                <a target="blank" href={props.linkGit}>
                <img src={github} alt="" />

                </a>
                </>
}

                </div>
                <div className="share">
                {toggle?
                <img onClick={CopyToClipboard} src={shareDarkMode} alt="" />

            :
            <img onClick={CopyToClipboard} src={share} alt="" />
            
            }

                <div className="copyWidget">
                    <h4>{copy}</h4>
                </div>
                </div>
            </div>
                {props.techs?
            <div className="tags">

{                props.techs.map((tech)=>{
                 return(

                  <div className="projectTag">
                        <h5>{tech}</h5>
                    </div>
                 )
                })}
            
            </div>
            :null}
            <div className="description">
                <p>{props.text}</p>
            </div>
        </div>
     );
}
 
export default ProjectContainer;