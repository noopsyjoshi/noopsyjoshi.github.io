<template>
  <section id="projects" class="projects">
    <div class="col-10 offset-1">
      <div v-for="(item, index) in projects" :key="index" class="projects__project">
        <div class="col-7">
          <div class="project__title-wrapper">
            <h2 class="project__title">
              <span class="project__title project__title--number">{{ item.number }}</span>
              {{ item.title }}
            </h2>
            <div class="project__image-wrapper">
              <!-- <img class="project__image" :src="item.image.url" :alt="item.image.alt" /> -->
              <img class="project__image" src="../../assets/images/paperlondon.jpg" />
            </div>
            <div class="project__description-wrapper">
              <p class="project__description">Sustainable fashion Shopify E-commerce project</p>
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
      default () {
        return [
          {
            number: '01',
            title: 'Paper London',
            image: {
              url: '../../assets/images/paperlondon.jpg',
              alt: 'Paper London Image'
            },
            description: 'Sustainable fashion Shopify c-commerce project.'
          },
          {
            number: '02',
            title: 'The Collective',
            image: {
              url: '../../assets/images/paperlondon.jpg',
              alt: 'Image of The Collective website'
            },
            description: 'Co-living spaces website built in Vue.js.'
          },
          {
            number: '03',
            title: 'Thanos Hotels',
            image: {
              url: '../../assets/images/paperlondon.jpg',
              alt: 'Image of Thanos Hotels website'
            },
            description:
              'Three luxury hotels based in Cyprus, part of the Thanos group. Created using Handlebars.js templating.'
          },
          {
            number: '04',
            title: 'Space Invaders',
            image: {
              url: '../../assets/images/paperlondon.jpg',
              alt: 'Image of Thanos Hotels website'
            },
            description: 'Game created during a 3 month coding bootcamp using HTML, CSS and JavaScript.'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/atomic/components/_projects.scss';
</style>
