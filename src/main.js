import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Splitting from 'splitting';
import { Curtains } from 'curtainsjs';
// import LocomotiveScroll from 'locomotive-scroll';
// import 'locomotive-scroll/dist/locomotive-scroll.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');


Splitting({
  target: '[data-splitting]',
  by: 'chars',
  key: null,
});


// window.onload = function() {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//   });
//   scroll.init();
// };

window.addEventListener('load', function() {

  function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  // set up our WebGL context and append the canvas to our wrapper
  const webGLCurtain = new Curtains({
    container: 'canvas',
  });

  webGLCurtain.onRender(function() {
    // update our planes deformation
    // increase/decrease the effect
    planesDeformations = lerp(planesDeformations, 0, .6);
  }).onScroll(function() {
    // get scroll deltas to apply the effect on scroll
    const delta = webGLCurtain.getScrollDeltas();

    // invert value for the effect
    delta.y = -delta.y;

    // threshold
    if (delta.y > 60) {
      delta.y = 60;
    } else if (delta.y < -60) {
      delta.y = -60;
    }

    if (Math.abs(delta.y) > Math.abs(planesDeformations)) {
      planesDeformations = lerp(planesDeformations, delta.y, 0.5);
    }
  }).onError(function() {
    // we will add a class to the document body to display original images
    document.body.classList.add('no-curtains', 'planes-loaded');
  }).onContextLost(function() {
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
      top: 100,
      right: 0,
      bottom: 100,
      left: 0,
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
    plane && plane.onLoading(function() {
      // console.log(plane.loadingManager.sourcesLoaded);
    }).onReady(function() {
      // once everything is ready, display everything
      if (index === planes.length - 1) {
        document.body.classList.add('planes-loaded');
      }
    }).onRender(function() {
      // update the uniform
      plane.uniforms.planeDeformation.value = planesDeformations;
    });
  }
});
