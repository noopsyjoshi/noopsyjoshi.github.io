import _ from 'lodash';

const SkewAnimation = ($el) => {
  window.onload = function() {
    const projects = document.querySelector('.projects__block');
    let prevPos = window.pageYOffset;

    const initSkew = function() {
      const newPos = window.pageYOffset;
      const diff = newPos - prevPos;
      const speed = _.clamp(diff * 0.07, -10, 10);

      projects.style.transform = `skewY(${speed}deg)`;

      prevPos = newPos;

      requestAnimationFrame(initSkew);
    };

    const removeSkew = function() {
      projects.style.transform = 'none';
    };

    window.innerWidth >= 768 ? initSkew() : removeSkew();

    window.onresize = (e) => {
      window.innerWidth >= 768 ? initSkew() : removeSkew();
    };
  };
};

export default SkewAnimation;
