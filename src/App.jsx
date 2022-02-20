import './App.css'
import Skills from "./sections/Skills";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Tutorials from "./sections/Tutorials";
import Contact from "./sections/Contact";

function App() {
    return (
        <div className="App">
            <Intro/>
            <Home/>
            <Skills/>
            <Projects/>
            <Experience/>
            <About/>
            <Tutorials/>
            <Contact/>
        </div>
    )
}

export default App
