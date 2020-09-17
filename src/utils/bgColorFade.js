const BgColorFade = ($el) => {
  const sectionColors = Array.from(document.querySelectorAll('[data-color]'));
  const bgBody = document.querySelector('.bg-body');

  window.onscroll = function() {
    sectionColors.forEach((section) => {
      if ((section.getBoundingClientRect().top - 200) <= 0) {
        const bgColor = section.dataset.color;
        bgBody.classList = `bg-body ${bgColor}`;
      }
    });
  };

  window.onresize = function() {
    sectionColors.forEach((section) => {
      if (section.getBoundingClientRect().top - 200 <= 0) {
        const bgColor = section.dataset.color;
        bgBody.classList = `bg-body ${bgColor}`;
      }
    });
  };
};

export default BgColorFade;
