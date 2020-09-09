import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

const SplittingAnimation = ($el) => {
  
  console.log('into split');

  const animateText = Array.from(document.querySelectorAll('.d-split'));

  animateText.forEach((text) => {
    Splitting({
      target: text,
      by: 'chars',
    });
  });
};

export default SplittingAnimation;
