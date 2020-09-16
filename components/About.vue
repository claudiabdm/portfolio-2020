<template>
  <div class="overlay">
    <section class="section">
      <h2 v-visible-onscroll class="section__title section__title--sm">
        About me
      </h2>
      <div class="section__group">
        <p class="section__text">
          <span class="section__text" v-visible-onscroll>
            I am a biology graduate that decided to change paths and become a
            <strong>front-end</strong> developer after finding out that web
            development was my real <strong>passion</strong>.<br />
          </span>
          <span class="section__text" v-visible-onscroll
            >I enjoy developing <strong>user-friendly</strong> apps. I always
            try to follow best practices and love learning new things.
            Currently, I am looking for a place where I keep
            <strong>learning</strong> and <strong>grow</strong> professionally.
          </span>
        </p>
        <div v-visible-onscroll class="section__img">
          <img
            src="@/assets/avatar.svg"
            alt="Claudia Benito Avatar"
            class="section__avatar"
          />
        </div>
      </div>
      <h3 v-visible-onscroll class="section__subtitle">My Skills</h3>
      <Tags :tags="skills" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tags from "@/components/Tags.vue";

export default Vue.extend({
  data() {
    return {
      skills: [
        "Figma",
        "CSS3",
        "HTML5",
        "SCSS",
        "Responsive",
        "Mobile First",
        "BEM",
        "JavaScript",
        "Angular",
        "Vue",
        "Material",
        "MongoDB",
        "NodeJS",
        "Koa",
        "Git",
        "SCRUM"
      ]
    };
  },
  components: { Tags }
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/_mixins.scss";
@import "@/assets/styles/global/_variables.scss";

.section {
  height: 100%;
  position: relative;
  &::before {
    @include size(100vw, 100%);
    @include absolute(0, 0, 0, 0);
    content: "";
    background: $gradient;
    clip-path: polygon(0 45vw, 0 0, 100% 0, 100% 45vw, 50vw 30vw);
    z-index: -1;
  }

  &__group {
    @include flex(center, center);
    flex-direction: column-reverse;
    transition: all 0.5s linear;
  }

  &__img {
    @include flex(center, center);
    transition: all 0.5s linear;
  }

  &__avatar {
    @include size(30vw);
    transition: all 0.5s linear;
  }

  &__tags {
    transition: all 0.5s linear;
  }

  @media screen and (min-width: 768px) {
    height: 100%;
    &::before {
      @include size(100vw, 100%);
      clip-path: polygon(0 45vw, 0 0, 100% 0, 100% 45vw, 50vw 35vw);
    }

    &__group {
      @include flex(flex-start, space-between);
      flex-direction: row;
      margin-bottom: 5vh;
    }

    &__img {
      flex-basis: 0;
      flex-grow: 1;
    }

    &__avatar {
      @include size(20vw);
    }
  }
}
</style>
