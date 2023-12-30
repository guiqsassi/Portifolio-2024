import "./Input.css"
import React, {SetStateAction, Dispatch, useState, useEffect } from 'react';
import { useSelector } from "react-redux";

const Input = (props )=>{
    const {toggle} = useSelector((state)=> state.darkModeReducer)
    const[view, setView] = useState(false)
    useEffect(
    ()=>{
        if(props.password){
            setView(true)
        }
        else{
            setView(false)
        }
    }  
    ,[])

    const handleChange = (e)=>{
        props.setValue(e.target.value)
    }
    const handleChangeTextArea = (e)=>{
        props.setValue(e.target.value)
    }

    return(
        <div className={`campoInput ${toggle? "darkModeInput": null}`}>
            <label style={props.error? { color: "red"}: {}}>{props.name}</label>
        {props.textArea? <div className="TextContainer">
        <textarea style={props.error? { borderColor: "red"}: {}} name={props.formName} value={props.value} onChange={handleChangeTextArea} placeholder={props.placeholder}/>   
        </div>:
          <div className="inputContainer"  style={props.error? { borderColor: "red"}: {}}>
         <input name={props.formName} type={view? "password" : "text"} value={props.value} onChange={handleChange} placeholder={props.placeholder}/>   

        </div>
        
    }
          
    
        </div>
    )
}

export default Input;