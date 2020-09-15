<template>
  <div class="close__wrapper">
    <router-link class="close__link link" :to="{ name: 'home'}">
      <div class="close" /><p>HOME</p>
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
@import '@/assets/scss/atomic/elements/_close.scss';
</style>


