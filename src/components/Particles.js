import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";


const ParticlesComponent = () => {

    const options = useMemo(() => {
        return {
            fpsLimit: 40,
            fullScreen: {
                zIndex: 0
            },
            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: !0
                    }
                },
                color: {
                    value: ["#fdcf58", "#757676", "#f27d0c", "#800909", "#f07f13"]
                },
                opacity: {
                    value: {
                        min: .1,
                        max: .5
                    }
                },
                size: {
                    value: {
                        min: 1,
                        max: 3
                    }
                },
                move: {
                    enable: !0,
                    speed: 4,
                    random: !1
                },
                	
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {
                        enable: !0,
                        mode: "push"
                    },
                    resize: !0
                },
            },
            background: {
                image: "linear-gradient(to right, #2c5364, #203a43, #0f2027)"
            },
            
        };
    }, []);


    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
        loadFull(engine);
    }, []);
    return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
