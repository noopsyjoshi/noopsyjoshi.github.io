<template>
  <nav class="navigation" role="navigation">
    <div class="col-10 offset-1">
      <div class="navigation__flex">
        <div class="navigation__icon">
          <h1 class="navigation__logo">n.</h1>
        </div>
        <!-- <div @click="toggleNav">
          <svg :class="{ active: isActive }" class="navigation__toggle navigation__toggle--rotate" viewBox="0 0 100 100" width="60" onclick="this.classList.toggle('active')">
            <path
                class="navigation__toggle-line navigation__toggle-line--top"
                d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path
                class="navigation__toggle-line navigation__toggle-line--middle"
                d="m 30,50 h 40"
            />
            <path
                class="navigation__toggle-line navigation__toggle-line--bottom"
                d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </div> -->
        <div :class="{ active: isActive }" class="navigation__block">
          <ul class="navigation__links">
            <li class="navigation__link">
              <a class="navigation__anchor" href="#projects">Projects</a>
            </li>
            <li class="navigation__link">
              <a class="navigation__anchor" href="#about">About</a>
            </li>
            <li class="navigation__link">
              <a class="navigation__anchor" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import '@/assets/scss/atomic/components/_navigation.scss';
</style>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
