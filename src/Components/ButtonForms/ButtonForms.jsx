import "./ButtonForms.css"

const ButtonForms = (props)=>{
    return(
        <>
        <button type={"submit"} style={props.delete? { backgroundColor: "#f34336"}: {}} value={"Send"} onClick={props.onClick} className="ButtonForms">{props.name}</button>
        </>
    )
}
export default ButtonForms