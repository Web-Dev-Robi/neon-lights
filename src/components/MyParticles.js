import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

export default function MyParticles() {

 

    const options = useMemo(() => {
        return {
            fpsLimit: 40,
            fullScreen: {
                enable: false,
                zIndex: -1,
                height: window.innerHeight,
                width: window.innerWidth,
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



    return (

      
       
        <Particles
            id="tsparticles"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: -1,
                width: window.innerHeight,
                height: window.innerWidth,
            }}
                init={particlesInit}
                options={options}
            />
        


    );
}