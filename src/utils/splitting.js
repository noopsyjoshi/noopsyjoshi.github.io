import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

const SplittingAnimation = ($el) => {
  window.onload = function() {};
  
  const chars = Array.from(document.querySelectorAll('.d-split'));

  chars.forEach((el) => {
    Splitting({
      target: el,
      by: 'chars',
    });
  });
};

export default SplittingAnimation;
