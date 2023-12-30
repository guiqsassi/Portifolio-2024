import "./Sidebar.css"
import moon from "../../assets/moon.png"
import link from "../../assets/Link.png"
import laptop from "../../assets/Laptop.png"
import home from "../../assets/home.png"

import sun from "../../assets/sun.png"
import linkDark from "../../assets/LinkDarkMode.png"
import laptopDark from "../../assets/LaptopDarkMode.png"
import homeDark from "../../assets/HouseDarkMode.png"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
const Sidebar = () => {
    const dispatch = useDispatch()
    const {toggle} = useSelector((state)=> state.darkModeReducer)
    const handleClick = ()=>{
        dispatch({type:"toggle"})
    }
    return ( 
        <aside className={`sidebar ${toggle? "darkMode-Container":null}`}>
            <nav className="sidebarContainer">
                <ul>
                    <li>
                        <a href="#home">
                    {
                    toggle?
                    <img src={homeDark} alt="" />

                    :
                    <img src={home} alt="" />
                    }
                        </a>
                    </li>
                    <li>
                        <a href="#Projects">
                    {toggle?
                    <img src={laptopDark} alt="" />
                    :
                    <img src={laptop} alt="" />

                    }

                        </a>
                    </li>
                    <li>
                        <a href="#a">
                        {toggle?
                    <img src={linkDark} alt="" />
                    :
                    <img src={link} alt="" />

                    }
                        </a>
                    </li>
                    <li>
                        <a onClick={handleClick}>
                    {
                        toggle?
                        <img src={sun} alt="" />

                        :
                        <img src={moon} alt="" />
                    }

                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
     );
}
 
export default Sidebar;