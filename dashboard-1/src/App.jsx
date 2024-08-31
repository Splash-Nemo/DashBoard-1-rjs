import { useState } from "react"
import Header from "./components/header/header"

function App() {

  const[darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`} >
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
    </div>
  )
}

export default App
