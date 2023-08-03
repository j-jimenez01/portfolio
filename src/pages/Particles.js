import React from 'react';
import Particles from 'react-particles-js';

const ParticlesBackground = () => {
  return (
    <div className="particle">
      <Particles
        height="100vh"
        width="100vw"
        params={{
          particles: {
            collisions: {
              enable: true
            },
            number: {
              value: 100,
              density: {
                enable: false
              }
            },
            color: {
              value: ['#d0ff00', '#ff0000', '#00ff00', '#0000ff'] // Array of colors for particle change
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: true,
              color: '#0000ff' // Color of the lines
            },
            move: {
              random: true,
              speed: 1,
              direction: 'bottom',
              out_mode: 'out'
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'push'
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 6,
                opacity: 0.4
              },
              push: {
                particles_nb: 5
              }
            },
            retina_detect: true
          }
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
