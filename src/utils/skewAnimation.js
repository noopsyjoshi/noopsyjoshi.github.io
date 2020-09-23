// /* eslint-disable no-undef */
// // import _ from 'lodash';

// const SkewAnimation = ($el) => {
//   const body = document.body;
//   const scrollWrap = document.getElementsByClassName('smooth-scroll-wrapper')[0];
//   console.log(scrollWrap);
//   const height = scrollWrap.getBoundingClientRect().height - 1;
//   // const speed = 0.04;

//   // const offset = 0;

//   body.style.height = Math.floor(height) + 'px';

//   // function smoothScroll() {
//   //   offset += (window.pageYOffset - offset) * speed;

//   //   const scroll = 'translateY(-' + offset + 'px) translateZ(0)';
//   //   scrollWrap.style.transform = scroll;

//   //   requestAnimationFrame(smoothScroll);
//   // }

//   // smoothScroll();
  
//   const content = document.querySelector('section');
//   let currentPos = window.pageYOffset;

//   const callDistort = function() {
//     const newPos = window.pageYOffset;
//     const diff = newPos - currentPos;
//     const speed = diff * 0.35;

//     content.style.transform = 'skewY(' + speed + 'deg)';
//     currentPos = newPos;
//     requestAnimationFrame(callDistort);
//   };

//   callDistort();
// };

// export default SkewAnimation;
