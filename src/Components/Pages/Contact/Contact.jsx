import "./Contact.css"
import Input from "../../Input/Input"
import ButtonForms from "../../ButtonForms/ButtonForms"
import ContactImg from "../../../assets/Contact.svg"
import { useState, useRef } from "react"
import NotificationError from "../../Notification/NotificationError"
import NotificationOkay from "../../Notification/NotificationOkay"
import emailjs from '@emailjs/browser';
import { useSelector } from "react-redux"


const Contact = () => {
    const [notification, setNotification] = useState(false)
    const [notificationError, setNotificationError] = useState(false)
    const [errorText, setErrorText] = useState("")
    const {toggle} = useSelector((state)=> state.darkModeReducer)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const form = useRef();

    const sendEmail = (e) => {

      e.preventDefault();
      if(name !== "" && email!== ""&& message !== ""){
      emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_EMAIL_TEMPLATE, form.current, import.meta.env.VITE_API_KEY)
        .then((result) => {
            console.log(result.text);

            setNotification(true)
            setTimeout(()=>{setNotification(false)}, 7000);   
        }, (error) => {
            setErrorText("Um erro inesperado ocorreu")
            console.log(error);
            setNotificationError(true)
            setTimeout(()=>{setNotificationError(false)}, 7000);   
        });
    }
    else{
        setNotificationError(true)
        setErrorText("Insira todos os dados corretamente")

        setTimeout(()=>{setNotificationError(false)}, 7000);   

    }
};
    return (
        <>
                <section id="Contact" className="Contact">
                <NotificationError text={errorText} state={notificationError}></NotificationError>
            <NotificationOkay state={notification}></NotificationOkay>
        <div className={`ContactContainer ${toggle? "darkMode-Container": null}`}>
            <div className="imagePaper">
                <h2>Entre em <br /> contato</h2>
                <img src={ContactImg} alt="" />
            </div>
            <div className="Formulario">
                <form action="" ref={form}>
                    
                    <Input placeholder="Nome" formName="from_name" value={name} setValue={setName} name={"Nome"}></Input>
                    <Input placeholder="Email" formName="from_email" value={email} setValue={setEmail} name={"Email"}></Input>
                    <Input textArea={true} formName="message" placeholder="Mensagem" value={message} setValue={setMessage} name={"Mensagem"}></Input>
                    <ButtonForms onClick={sendEmail} name={"Enviar"}></ButtonForms>
                </form>
            </div>
        </div>
    </section>
        </>

     );
}
 
export default Contact;