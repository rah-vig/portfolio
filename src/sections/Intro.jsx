import React from 'react';
import {Parallax} from "react-scroll-parallax";
import {PARTICLE_OPTIONS} from "~/section-configs/IntroConfig";

function Intro(props) {
    return (
        <Parallax className="sections intro" translateY={[-40, 40]}>
            <div style={{position: "sticky", top: "0"}}>Intro</div>
        </Parallax>
    );
}

export default Intro;