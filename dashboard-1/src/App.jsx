import { useState } from "react"
import Header from "./components/header/header"
import Sidebar from "./components/sidebar/sidebar";

import Main from "./ui/main"
import Content from "./ui/content"
import Profile from "./profile/profile";

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

      <Main>
        <Content>Main Content</Content>
        <Profile />
      </Main>

    </div>
  )
}

export default App
