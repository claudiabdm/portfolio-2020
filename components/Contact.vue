<template>
  <section class="section section--flex">
    <h2 v-visible-onscroll class="section__title section__title--sm">Contact Me</h2>
    <p v-visible-onscroll class="section__text">
      If you want to know more about me you can check out my
      <strong>resume</strong> at Linkedin or my <strong>code</strong> at GitHub.<br />
      You're welcome to write me an email too!
    </p>
    <address class="contact">
      <a href="mailto:claudiabdm@hotmail.es" v-visible-onscroll class="contact-link">
        <img class="section__icon section__icon--sm" src="@/assets/email.svg" alt="Email icon" />
        <span>claudiabdm@hotmail.es</span>
      </a>
      <a href="https://github.com/claudiabdm" v-visible-onscroll class="contact-link">
        <img class="section__icon section__icon--sm" src="@/assets/github.svg" alt="Giithub icon" />
        <span>claudiabdm</span>
      </a>
      <a href="https://linkedin.com/claudiabdm" v-visible-onscroll class="contact-link">
        <img
          class="section__icon section__icon--sm"
          src="@/assets/linkedin.svg"
          alt="Linkedin icon"
        />
        <span>Claudia Benito de Moya</span>
      </a>
    </address>

    <a class="section__link" v-visible-onscroll @click="backToTop">
      <svg class="section__icon" viewBox="0 0 24 24" width="24px" height="24px" id="up">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
      Back to top
    </a>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    backToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/_mixins.scss';
@import '@/assets/styles/global/_variables.scss';
.section {
  height: 100vh;
  background: $base;

  position: relative;
  background: transparent;

  &::before {
    @include size(100vw, 100%);
    @include absolute(0, 0, 0, 0);
    content: '';
    background: $gradient;
    clip-path: polygon(0 45vw, 0 0, 100% 0, 100% 45vw, 50vw 30vw);
    z-index: -1;

    @media screen and (min-width: 768px) {
      clip-path: polygon(0 40vw, 0% 0%, 100vw 0%, 100% 40vw, 50vw 20vw);
    }
  }

  .section__link {
    margin: 0;
    position: absolute;
    bottom: $header-height;
  }

  .section__text {
    text-align: justify;
    flex-grow: 0;
    margin: 20vw 0 10vw;
    @media screen and (min-width: 768px) {
      margin: 0;
    }
  }
}

// CONTACT  INFO      //
// ------------------ //

.contact {
  display: flex;
  flex-direction: column;

  &-link {
    @include flex(center, flex-start);
    color: $grey-300;
    transition: color 0.15s linear, opacity  0.5s linear;

    & + & {
      margin-top: 10px;
    }

    &:hover {
      color: $primary;
    }
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }
}
</style>
