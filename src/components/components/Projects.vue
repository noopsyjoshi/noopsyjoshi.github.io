<template>
  <section id="projects" class="projects">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="reveal-text-wrapper">
          <h2 data-scroll data-aos="slide-up-text" class="d-split section__title">Projects</h2>
        </div>
        <div id="page-wrap">
          <div id="canvas" />
          <div id="content">
            <div v-for="(item, index) in projects" :key="index" class="projects__project">
              <router-link :to="item.path" class="projects__link">
                <figure data-aos="reveal-image-right" class="reveal-image-right reveal-image-right--dark projects__project-image-wrapper">
                  <img data-aos="zoom-image" class="projects__project-image reveal-image" :src="require(`@/assets/images/projects/${item.image.url}`)" :alt="item.image.alt">
                </figure>
                <div class="reveal-text-wrapper projects__project-title-wrapper">
                  <h3 data-aos="slide-up-body" class="d-split projects__project-title">
                    <span class="projects__project-title projects__project-title--number">{{ item.number }}</span>
                    {{ item.title }}
                  </h3>
                </div>
                <div class="projects__project-description-wrapper">
                  <p data-aos="fade-in" data-aos-duration="750" data-aos-delay="300" class="projects__project-description">{{ item.description }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <router-view /> -->
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
              url: 'paper.jpg',
              alt: 'Paper London Image',
            },
            description: 'A new, redesigned e-commerce site built for a sustainabile fashion brand using Shopify ',
            path: '/paperlondon',
          },
          {
            number: '02',
            title: 'The Collective',
            image: {
              url: 'thecollective.jpg',
              alt: 'Image of The Collective website',
            },
            description: 'A site built for co-living spaces around London using Vue.js',
            path: '/thecollective',
          },
          {
            number: '03',
            title: 'Thanos Group',
            image: {
              url: 'almyra.jpg',
              alt: 'Image of Thanos Hotels website',
            },
            description:
              'Three sites created using Handlebars.js templating created for their corresponding luxury hotels situated in Cyprus.',
            path: '/thanos',
          },
          {
            number: '04',
            title: 'Space Invaders',
            image: {
              url: 'spaceinvaders.png',
              alt: 'Image of Thanos Hotels website',
            },
            description: 'A Star Wars spin taken on the classic Space Invaders. A web based game created during a 3 month coding bootcamp using HTML, CSS and JavaScript.',
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
