import React from 'react';
import {Parallax} from "react-scroll-parallax";
import {PARTICLE_OPTIONS, ANIMATED_INTRO_SENTENCES} from "src/section-configs/IntroConfig";
import Particles from "react-tsparticles";
import AnimateListElements from "../utilities/AnimateListElements";

function Intro(props) {
    return (
        <Parallax className="sections intro">
            <Particles id="tsparticles" options={PARTICLE_OPTIONS}/>
            <div className="content">
                <AnimateListElements transitionElements={ANIMATED_INTRO_SENTENCES}/>
            </div>
        </Parallax>
    );
}

export default Intro;