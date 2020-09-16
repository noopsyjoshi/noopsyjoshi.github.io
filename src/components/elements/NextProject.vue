<template>
  <h2
      data-scroll
      data-aos="slide-up-subheading"
      class="d-split next-project__heading"
  >
    Next Project
    <router-link :to="{ name: 'thecollective' }" class="project__link projects__link">
      <figure
          data-aos="reveal-image-up"
          class="reveal-image-up reveal-image-up--light projects__project-image-wrapper"
      >
        <img
            data-aos="zoom-image"
            class="projects__project-image reveal-image"
            src="@/assets/images/projects/thecollective.jpg"
        >
      </figure>
      <h3 data-aos="slide-up-body" class="project__project-title d-split">The Collective</h3>
    </router-link>
  </h2>
</template>

<script>
 
</script>
