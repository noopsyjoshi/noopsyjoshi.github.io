const BgColorFade = ($el) => {
  const main = document.querySelector('.main');
  const toggles = Array.from(document.querySelectorAll('.toggle-color__btn'));

  if (main && toggles) {
    toggles.forEach((toggle) => {
      toggle.addEventListener('click', function() {
        const _this = toggle;
        const theme = _this.dataset.bgColor;

        // remove all color classes
        if (toggle.classList.contains('active')) toggle.classList.remove('active');
        main.classList.forEach((className) => {
          if (className.startsWith('body--')) {
            main.classList.remove(className);
          }
        });

        // add selected color class
        main.classList.add(`body--${theme}`);
        _this.classList.add('active');
      });

    });
  }
};

export default BgColorFade;
