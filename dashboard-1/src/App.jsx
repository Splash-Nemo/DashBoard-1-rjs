import { useState } from "react"
import Header from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar";

function App() {

  const[darkMode, setDarkMode] = useState(false);
  const[isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = ()=>{
    setIsSidebarOpen(!isSidebarOpen);
  }

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`} >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar}/>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </div>
  )
}

export default App
