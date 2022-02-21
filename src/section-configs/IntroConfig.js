const PARTICLE_OPTIONS = {
    "fullScreen": {
        "enable": true,
        "zIndex": 100
    },
    "interactivity": {
        "events": {
            "onClick": {
                "enable": true,
                "mode": "repulse"
            },
            "onHover": {
                "enable": true,
                "mode": "attract",
                "parallax": {
                    "enable": true,
                    "force": 10
                }
            }
        },
        "modes": {
            "attract": {
                "distance": 0
            },
            "bubble": {
                "distance": 250,
                "duration": 2,
                "opacity": 0,
                "size": 0
            },
            "grab": {
                "distance": 400
            },
            "repulse": {
                "distance": 400
            }
        }
    },
    "motion": {
        "reduce": {
            "factor": 10
        }
    },
    "particles": {
        "color": {
            "value": "#ffed63bf"
        },
        "links": {
            "color": {
                "value": "#ffffff"
            },
            "distance": 150,
            "opacity": 0.4
        },
        "move": {
            "attract": {
                "rotate": {
                    "x": 600,
                    "y": 600
                }
            },
            "enable": true,
            "path": {},
            "outModes": {
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "random": true,
            "speed": 1,
            "spin": {}
        },
        "number": {
            "density": {
                "enable": true
            },
            "value": 160
        },
        "opacity": {
            "random": {
                "enable": true
            },
            "value": {
                "min": 0,
                "max": 1
            },
            "animation": {
                "enable": true,
                "speed": 1,
                "minimumValue": 0
            }
        },
        "shadow": {
            "blur": 0.6,
            "enable": true,
            "offset": {
                "x": 1,
                "y": 1
            }
        },
        "size": {
            "random": {
                "enable": true
            },
            "value": {
                "min": 1,
                "max": 3
            },
            "animation": {
                "speed": 4,
                "minimumValue": 0.3
            }
        },
        "twinkle": {
            "particles": {
                "frequency": 0.7,
                "opacity": 0.8
            }
        }
    }
}

export {PARTICLE_OPTIONS}