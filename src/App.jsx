import { useState } from "react"
import Heading from "./components/Heading"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(prevState => !prevState)
  }

  return (
    <main>
      <Heading darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    </main>
  )
}

export default App
