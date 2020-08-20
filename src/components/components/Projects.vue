<template>
  <section id="projects" class="projects">
    <div class="col-12 col-md-10 offset-md-1">
      <div id="page-wrap">
        <div id="canvas" />
        <div id="content">
          <div v-for="(item, index) in projects" id="planes" :key="index" class="projects__project">
            <router-link :to="item.path" class="plane-wrapper projects__link">
              <div class="projects__project-title-wrapper">
                <h2 class="projects__project-title">
                  <span class="projects__project-title projects__project-title--number">{{ item.number }}</span>
                  {{ item.title }}
                </h2>
              </div>
              <div class="plane-inner">
                <div class="landscape-wrapper">
                  <div class="landscape-inner">
                    <div class="plane projects__project-image-wrapper">
                      <img data-sampler="planeTexture" class="" :src="require('@/assets/images/paperlondon.jpg')" :alt="item.image.alt">
                    </div>
                  </div>
                </div>
              </div>
              <div class="projects__project-description-wrapper">
                <p class="projects__project-description">Sustainable fashion Shopify E-commerce project</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view />
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
            image: {
              url: '@/assets/images/almyra.jpg',
              alt: 'Paper London Image',
            },
            description: 'Sustainable fashion Shopify c-commerce project.',
            path: '/paperlondon',
          },
          {
            number: '02',
            title: 'The Collective',
            image: {
              url: '@/assets/images/thecollective.jpg',
              alt: 'Image of The Collective website',
            },
            description: 'Co-living spaces website built in Vue.js.',
            path: '/thecollective',
          },
          {
            number: '03',
            title: 'Thanos Hotels',
            image: {
              url: '@/assets/images/almyra.jpg',
              alt: 'Image of Thanos Hotels website',
            },
            description:
              'Three luxury hotels based in Cyprus, part of the Thanos group. Created using Handlebars.js templating.',
            path: '/thanos',
          },
          {
            number: '04',
            title: 'Space Invaders',
            image: {
              url: '@/assets/images/almyra.jpg',
              alt: 'Image of Thanos Hotels website',
            },
            description: 'Game created during a 3 month coding bootcamp using HTML, CSS and JavaScript.',
            path: '/spaceinvaders',
          },
        ];
      },
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/components/_projects.scss';
</style>
