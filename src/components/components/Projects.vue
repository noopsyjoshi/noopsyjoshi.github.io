<template>
  <section id="projects" data-color="bg--grey-light" class="body--dark projects">
    <div class="row">
      <div class="col-10 offset-1">
        <h2 data-scroll data-aos="slide-up-heading" class="d-split projects__title">Project Showcase</h2>
        <div class="projects__container">
          <div v-for="(item, index) in projects" :key="index" class="projects__block">
            <div class="projects__item">
              <router-link class="projects__link" :to="item.path">
                <figure data-aos="reveal-image-up" :data-displacement="images.displacement" class="link reveal-image-up projects__figure">
                  <img id="project" class="projects__image" :src="require(`@/assets/images/projects/${item.images.url1}`)" :alt="item.images.alt">
                  <img id="project" class="projects__image" :src="require(`@/assets/images/projects/${item.images.url2}`)" :alt="item.images.alt">
                </figure>
              </router-link>
              <div class="projects__flex">
                <h3 data-aos="slide-up-body" class="d-split  projects__project-title">{{ item.title }}</h3>
                <div class="projects__project-description-wrapper">
                  <p data-aos="slide-up-body" class="d-split projects__project-description">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
            description: 'E-commerce, Shopify',
            path: '/paperlondon',
          },
          {
            number: '02',
            title: 'The Collective',
            images: {
              url1: 'collective-01.jpg',
              url2: 'collective-01.jpg',
              alt: 'Paper London Image',
            },
            description: 'Hospitality, Nuxt.js',
            path: '/thecollective',
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
              'Hospitality, Handlebars.js',
            path: '/thanos',
          },
          {
            number: '04',
            title: 'General Assembly',
            images: {
              url1: 'assembly-01.jpg',
              url2: 'assembly-01.jpg',
              alt: 'Image of Thanos Hotels website',
            },
            description: 'Selected work during a coding bootcamp',
            path: '/generalassembly',

          },
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
