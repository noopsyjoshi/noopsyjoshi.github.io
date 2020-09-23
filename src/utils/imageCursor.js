// import { TweenMax } from 'gsap/all';
import { gsap } from 'gsap/all';

const ImageCursor = ($el) => {


  const items = document.querySelectorAll('.hover-item');

  items.forEach((el) => {
    const itemHeight = el.getBoundingClientRect().height;
    const itemWidth = el.getBoundingClientRect().width;

    const image = el.querySelector('img');

    el.addEventListener('mouseenter', (e) => {
      gsap.to(image, { autoAlpha: 1 });
    });

    el.addEventListener('mouseleave', (e) => {
      gsap.to(image, { autoAlpha: 0 });
    });

    el.addEventListener('mousemove', (e) => {
      gsap.set(image, { x: e.offsetX - (itemWidth / 2), y: e.offsetY - (itemHeight / 2) });
    });
  });


};

export default ImageCursor;
