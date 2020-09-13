<template>
  <section id="projects" class="projects">
    <div class="row">
      <div class="np--sm col-10 offset-1">
        <h2 data-scroll data-aos="slide-up-subheading" class="d-split section__title">Projects</h2>
        <div class="projects__block">
          <div v-for="(item, index) in projects" :key="index" class="projects__project">
            <div class="projects__link">
              <router-link :to="item.path">
                <figure data-aos="reveal-image-up" class="reveal-image-up projects__project-image-wrapper">
                  <img data-aos="zoom-image" class="projects__project-image" :src="require(`@/assets/images/projects/${item.image.url}`)" :alt="item.image.alt">
                </figure>
              </router-link>
              <h3 data-aos="slide-up-body" class="d-split projects__project-title">
                <span class="projects__project-title--number">{{ item.number }} &nbsp;</span>
                <span>{{ item.title }}</span>
              </h3>
              <div class="projects__project-description-wrapper">
                <p data-aos="slide-up-fade" class="projects__project-description">{{ item.description }}</p>
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
              alt: 'Image from The Collective website',
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
            title: 'General Assembly Work',
            image: {
              url: 'almyra.jpg',
              alt: 'Image of Thanos Hotels website',
            },
            description: 'Selected projects built during a three month coding bootcamp in London',
            path: '/generalassembly',
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
