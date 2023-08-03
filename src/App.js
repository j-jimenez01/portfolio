import Navbar from "./Navbar"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import About from "./pages/About"
import Resume from "./pages/Resume"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  )
}

export default App