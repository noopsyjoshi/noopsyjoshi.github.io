import _ from 'lodash';

const SkewAnimation = ($el) => {
  window.onload = function() {
    const projects = Array.from(document.querySelectorAll('.projects__project'));
    let prevPos = window.pageYOffset;

    const isMobile = function() {
      return window.innerWidth < 768 ? true : false;
    };

    const isSafari = function() {
      const safari = window.safari !== undefined; // will return true if safari
      return safari;
    };

    const disableSkew = function() {
      projects.forEach((project) => {
        project.style.transform = 'none';
      });
    };

    const enableSkew = function() {
      const newPos = window.pageYOffset;
      const diff = newPos - prevPos;
      const speed = _.clamp(diff * 0.07, -10, 10);
      projects.forEach((project) => {
        project.style.transform = `skewY(${speed}deg)`;
      });
      prevPos = newPos;

      requestAnimationFrame(enableSkew);
    };

    // disable skew on mobile
    // disable skew in safari
    const initSkew = function() {
      if (isMobile() || isSafari() ) {
        disableSkew();
      } else {
        enableSkew();
      }
    };

    window.onresize = (e) => {
      initSkew();
    };
    
    initSkew();

  };
};

export default SkewAnimation;
