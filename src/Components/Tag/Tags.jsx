import "./Tag.css"


const Tag = (props) => {
    return ( 
        <div className="Tag" style={{backgroundColor: props.color}}>
            <img src={props.img} alt="" />
            <h3>{props.text}</h3>
        </div>
     );
}
 
export default Tag;