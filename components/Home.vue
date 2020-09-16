<template>
  <section class="section section--flex" v-if="animated">
    <h2 class="section__title section__title--lg">
      <div class="typewriter">Hello!</div>
      <div class="typewriter">I am Claudia Benito.</div>
      <div class="typewriter">
        A <strong>front-end developer</strong>
        <span class="typewriter__caret">_</span>
      </div>
    </h2>
    <a class="section__link section__link--animated" @click="goTo('about')">
      Learn more
      <svg class="section__icon" viewBox="0 0 24 24" id="down" width="24" height="24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    </a>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      animated: false,
    };
  },
  mounted() {
    this.animated = true;
  },
  methods: {
    goTo(section: string) {
      this.$emit('refName', section);
    },
  },
});
</script>
<style lang="scss" scoped>
@import '@/assets/styles/global/_variables.scss';
@import '@/assets/styles/mixins/_mixins.scss';

.section {
  height: 100vh;
  justify-content: space-around;
  color: $base;
  background: $gradient;
  clip-path: polygon(0 70vh, 0 0, 100vw 0, 100vw 70vh, 50vw 90vh);

  @media screen and (min-width: 768px) {
    clip-path: polygon(0 60vh, 0 0, 100vw 0, 100vw 60vh, 50vw 80vh);
  }
}
</style>
