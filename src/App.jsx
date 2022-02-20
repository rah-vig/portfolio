import React from "react";
import Skills from "./sections/Skills";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Intro from "./sections/Intro";
import Projects from "./sections/Projects";
import Tutorials from "./sections/Tutorials";
import Contact from "./sections/Contact";

import {ParallaxProvider} from 'react-scroll-parallax';
import "~/sections/sections.scss"

function App() {
    return (
        <div className="App">
            <ParallaxProvider>
                <Intro/>
                <Home/>
                <Skills/>
                <Projects/>
                <Experience/>
                <About/>
                <Tutorials/>
                <Contact/>
            </ParallaxProvider>
        </div>
    )
}

export default App
