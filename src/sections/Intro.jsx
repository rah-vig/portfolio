import React from 'react';
import {Parallax} from "react-scroll-parallax";
import {PARTICLE_OPTIONS} from "src/section-configs/IntroConfig";

function Intro(props) {
    console.log(PARTICLE_OPTIONS)
    return (
        <Parallax className="sections intro" translateY={[-40, 40]}>
            <div style={{position: "sticky", top: "0"}}>Intro</div>
        </Parallax>
    );
}

export default Intro;