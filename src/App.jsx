import Sidebar from './Components/sideBar/Sidebar'
import './App.css'
import Home from './Components/Pages/Home/Home'
import { useSelector } from 'react-redux'
import Projects from './Components/Pages/Projects/Projects'
import Contact from './Components/Pages/Contact/Contact'
import { useState } from 'react'
function App() {
    const [darkMode, setDarkMode] = useState(false)
    const {toggle} = useSelector((state)=>state.darkModeReducer)



  return (
    <div className={`App ${toggle? "App-darkMode": null}`}>
      <Sidebar></Sidebar>
      <Home></Home>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  )
}

export default App
