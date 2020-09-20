const BgColorFade = ($el) => {
  // const projects = Array.from(document.querySelectorAll('.projects__figure'));
  const projects = Array.from(document.querySelectorAll('.projects__project-title'));
  const bgBody = document.querySelector('.bg');

  // const changeBgColor = function() {
  //   console.log('hover');
  // };

  projects.forEach((project) => {
    project.onmouseover = function() {
      // console.log(this.closest('.projects__project'));
      const color = this.closest('.projects__project').dataset.bgColor;
      this.closest('.projects__project').classList.add('active');
      bgBody.classList.add(`bg--${color}`);
    };
  });

  projects.forEach((project) => {
    project.onmouseout = function() {
      const color = this.closest('.projects__project').dataset.bgColor;
      this.closest('.projects__project').classList.remove('active');

      bgBody.classList.remove(`bg--${color}`);
    };
  });

  // const hero = document.querySelector('.hero');

  // window.onscroll = function() {
  //   console.log(hero.getBoundingClientRect().top);
  //   if (hero.getBoundingClientRect().top < -10) {
  //     bgBody.classList.remove('bg-body--orange');
  //   } else {
  //     bgBody.classList.add('bg-body--orange');
  //   }
  // };

  // window.onscroll = function() {
  //   sectionColors.forEach((section) => {
  //     if ((section.getBoundingClientRect().top - 200) <= 0) {
  //       const bgColor = section.dataset.color;
  //       bgBody.classList = `bg-body ${bgColor}`;
  //     }
  //   });
  // };

  // window.onresize = function() {
  //   sectionColors.forEach((section) => {
  //     if (section.getBoundingClientRect().top - 200 <= 0) {
  //       const bgColor = section.dataset.color;
  //       bgBody.classList = `bg-body ${bgColor}`;
  //     }
  //   });
  // };
};

export default BgColorFade;
