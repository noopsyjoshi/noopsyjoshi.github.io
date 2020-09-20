/* eslint-disable no-undef */
import { Curtains } from 'curtainsjs';

const ProjectsAnimation = ($el) => {
  window.addEventListener('load', function() {
    
    function lerp(start, end, amt) {
      return (1 - amt) * start + amt * end;
    }

    // set up our WebGL context and append the canvas to our wrapper
    const webGLCurtain = new Curtains({
      container: 'canvas',
      pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
    });

    webGLCurtain
        .onRender(function() {
          // update our planes deformation
          // increase/decrease the effect
          planesDeformations = lerp(planesDeformations, 0, 0.075);
        })
        .onScroll(function() {
          // get scroll deltas to apply the effect on scroll
          const delta = webGLCurtain.getScrollDeltas();

          // invert value for the effect
          delta.y = -delta.y;


          // threshold
          // originally 60
          if (delta.y > 100) {
            delta.y = 100;
          } else if (delta.y < -100) {
            delta.y = -100;
          }

          if (Math.abs(delta.y) > Math.abs(planesDeformations)) {
            planesDeformations = lerp(planesDeformations, delta.y, 0.075);
          }
        })
        .onError(function() {
          // we will add a class to the document body to display original images
          document.body.classList.add('no-curtains', 'planes-loaded');
        })
        .onContextLost(function() {
          // on context lost, try to restore the context
          webGLCurtain.restoreContext();
        });

    // we will keep track of all our planes in an array
    const planes = [];
    let planesDeformations = 0;

    // get our planes elements
    const planeElements = document.getElementsByClassName('plane');

    const vs = `
          precision mediump float;
    
          // default mandatory variables
          attribute vec3 aVertexPosition;
          attribute vec2 aTextureCoord;
    
          uniform mat4 uMVMatrix;
          uniform mat4 uPMatrix;
    
          uniform mat4 planeTextureMatrix;
    
          // custom variables
          varying vec3 vVertexPosition;
          varying vec2 vTextureCoord;
    
          uniform float uPlaneDeformation;
    
          void main() {
              vec3 vertexPosition = aVertexPosition;
    
              // cool effect on scroll
              
              vertexPosition.y += sin(((vertexPosition.x + 1.0) / 2.0) * 3.141592) * (sin(uPlaneDeformation / 90.0));
    
              gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    
              // varyings
              vVertexPosition = vertexPosition;
              vTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
          }
      `;

    const fs = `
          precision mediump float;
    
          varying vec3 vVertexPosition;
          varying vec2 vTextureCoord;
    
          uniform sampler2D planeTexture;
    
          void main() {
              // just display our texture
              gl_FragColor = texture2D(planeTexture, vTextureCoord);
          }
      `;

    // all planes will have the same parameters
    const params = {
      vertexShader: vs,
      fragmentShader: fs,
      shareProgram: true, // share planes program to improve plane creation speed
      widthSegments: 10,
      heightSegments: 10,
      drawCheckMargins: {
        top: 0,
        right: 100,
        bottom: 0,
        left: 100,
      },
      uniforms: {
        planeDeformation: {
          name: 'uPlaneDeformation',
          type: '1f',
          value: 0,
        },
      },
    };

    // add our planes and handle them
    for (let i = 0; i < planeElements.length; i++) {
      planes.push(webGLCurtain.addPlane(planeElements[i], params));
      handlePlanes(i);
    }

    // handle all the planes
    function handlePlanes(index) {
      const plane = planes[index];

      // check if our plane is defined and use it
      plane &&
      plane
          .onLoading(function() {
          // console.log(plane.loadingManager.sourcesLoaded);
          })
          .onReady(function() {
          // once everything is ready, display everything
            if (index === planes.length - 1) {
              document.body.classList.add('planes-loaded');
            }
          })
          .onRender(function() {
          // update the uniform
            plane.uniforms.planeDeformation.value = planesDeformations;
          });
    }
  });
};

export default ProjectsAnimation;
