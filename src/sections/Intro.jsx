import React from 'react';
import {Parallax} from "react-scroll-parallax";
import {PARTICLE_OPTIONS} from "src/section-configs/IntroConfig";
import Particles from "react-tsparticles";
import AnimateListElements from "../utilities/AnimateListElements";

function Intro(props) {
    const sentences = ["Hey there!", "I'm Rahul", <div>I am a Software Developer specializing in web development</div>]

    const particlesInit = (main) => {
        console.log(main)

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Parallax className="sections intro">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={PARTICLE_OPTIONS}
            />

            <div className="content">
                <AnimateListElements transitionElements={sentences}/>
            </div>

        </Parallax>
    );
}

export default Intro;