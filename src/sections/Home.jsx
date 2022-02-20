import React from 'react';
import { Parallax } from 'react-scroll-parallax';

function Home(props) {
    return (
        <Parallax className="sections home">
            <div style={{position: "sticky", top: "0"}}>Home</div>
        </Parallax>
    );
}

export default Home;