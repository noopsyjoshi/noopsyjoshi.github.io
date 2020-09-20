<template>
  <section id="projects" data-color="bg--grey-light" class="projects">
    <!-- <div class="np--sm col-10 offset-1"> -->
    <h2 data-scroll data-aos="slide-up-body" class="d-split section__title">Projects</h2>
    <div v-for="(item, index) in projects" :key="index" class="projects__block">
      <div :data-bg-color="item.bgColor" class="projects__item">
        <router-link class="projects__link" :to="item.path">
          <h3 class="projects__project-title">{{ item.title }}</h3>
          <figure :data-displacement="images.displacement" class="projects__figure">
            <img id="project" class="projects__image" :src="require(`@/assets/images/projects/${item.images.url1}`)" :alt="item.images.alt">
            <img id="project" class="projects__image" :src="require(`@/assets/images/projects/${item.images.url2}`)" :alt="item.images.alt">
          </figure>
          <div class="projects__marquee">
            <div class="projects__marquee-inner" aria-hidden="true">
              <span>{{ item.title }}</span>
              <span>{{ item.title }}</span>
              <span>{{ item.title }}</span>
              <span>{{ item.title }}</span>
            </div>
          </div>
        </router-link>
      </div>
      <!-- <div class="projects__flex">
              <div class="projects__project-description-wrapper">
                <p data-aos="slide-up-body" class="d-split projects__project-description">{{ item.description }}</p>
              </div>
            </div> -->
    </div>
  </section>
</template>
<script>

export default {

  components: {},
  props: {
    projects: {
      type: Array,
      default() {
        return [
          {
            number: '01',
            title: 'Paper London',
            images: {
              url1: 'paper-01.jpg',
              url2: 'paper-01.jpg',
              alt: 'Paper London Image',
            },
            description: 'Redesigned e-commerce site built for a sustainabile fashion brand in Shopify ',
            path: '/paperlondon',
            bgColor: 'teal',
          },
          {
            number: '02',
            title: 'The Collective',
            images: {
              url1: 'collective-01.jpg',
              url2: 'collective-01.jpg',
              alt: 'Paper London Image',
            },
            description: 'Website developed using Vue.js for a co-living spaces start up',
            path: '/thecollective',
            bgColor: 'green-light',

          },
          {
            number: '03',
            title: 'Thanos Group',
            images: {
              url1: 'thanos-01.jpg',
              url2: 'thanos-01.jpg',
              alt: 'Images of Thanos hotels',
            },
            description:
              'Three websites built for Cyprian luxury hotels using Handlebars.js',
            path: '/thanos',
            bgColor: 'orange',
          },
          // {
          //   number: '04',
          //   title: 'General Assembly Work',
          //   image: {
          //     url: 'almyra.jpg',
          //     alt: 'Image of Thanos Hotels website',
          //   },
          //   description: 'Selected projects during a three month coding bootcamp in London',
          //   path: '/generalassembly',
          // },
        ];
      },
    },
  },
  data() {
    return {
      images: {
        displacement: require('@/assets/images/displacement/4.png'),
      },
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_projects.scss';
</style>
