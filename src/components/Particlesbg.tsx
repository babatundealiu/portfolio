import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim"; 


const Particlesbg = ( ) => {
    const [ init, setInit ] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {   
            await loadSlim(engine);  
        }).then(() => {
            setInit(true);
        });
    }, []);

    const ParticlesLoaded = (container:Container) =>  {
        console.log(container);
    };
   
    return (
      <div className=" lg:hidden ">
         { init && <Particles
            id="tsparticles"
            {...ParticlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#1f1f1f",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        
                    },
                    modes: {
                        push: {
                            quantity: 6,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#fff",
                    },
                    links: {
                        color: "#53faee",
                        distance: 150,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
} 
    
      </div>
        
)
    ;
};
export default Particlesbg;