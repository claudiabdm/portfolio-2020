<template>
  <div class="overlay">
    <section class="section section--flex">
      <h2 v-visible-onscroll class="section__title section__title--lg">
        <div class="typewriter">Take a look at</div>
        <div class="typewriter">
          my coding projects<span class="typewriter__caret">_</span>
        </div>
      </h2>
      <div class="section__group">
        <ProjectList :projectList="projects" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProjectList from '@/components/ProjectList.vue';

export default Vue.extend({
  data() {
    return {
      projects: [
        {
          name: 'FamilyMe',
          screenshot: 'videos/familyme-video.mov',
          desc: 'Full-stack web application to manage families.',
          technologies: [
            'Angular 9',
            'Mapbox',
            'Node.js',
            'Koa.js',
            'MongoDB',
            'Socket.io',
            'Heroku',
          ],
          demo: 'https://familyme.herokuapp.com/',
          code: 'https://github.com/claudiabdm/familyme-app',
        },
        {
          name: 'ACNH Search',
          screenshot: 'videos/acnh-video.mov',
          desc:
            'Front-end app to search critter info for the game Animal Crossing: New Horizons',
          technologies: ['HTML5', 'SCSS', 'Vue', 'Vuetify', 'Amplify', 'GitHub.io'],
          demo: 'https://claudiabdm.github.io/acnh-search',
          code: 'https://github.com/claudiabdm/acnh-search',
        },
        {
          name: 'Borify',
          screenshot: 'videos/borify-video.mov',
          desc:
            'A music player using Spotify API. Group challenge winner at Boream bootcamp.',
          technologies: ['HTML5', 'SCSS', 'Angular 9', 'Netlify'],
          demo: 'https://reto-music-player.netlify.app/',
          code: 'https://github.com/claudiabdm/borify',
        },
        {
          name: 'Boreame',
          screenshot: 'videos/boreame-video.mov',
          desc:
            'Contact address book app from scratch. Individual challenge winner at Boream bootcamp.',
          technologies: ['HTML5', 'SCSS', 'JavaScript', 'Gulp', 'GitHub.io'],
          demo: 'https://claudiabdm.github.io/boreame/',
          code: 'https://github.com/claudiabdm/boreame',
        },
      ],
    };
  },
  components: { ProjectList },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global/_variables.scss';
@import '@/assets/styles/mixins/_mixins.scss';

.section {
  position: relative;
  color: $primary;
  background: transparent;

  &::before {
    @include size(100vw, 100%);
    @include absolute(0, 0, 0, 0);
    content: '';
    background: $gradient;
    clip-path: polygon(50vw 40vh, 100% 20vh, 100% 100%, 0 100%, 0 20vh);
    z-index: -1;

    @media screen and (min-width: 1024px) {
      clip-path: polygon(50% 45%, 100% 20%, 100% 100%, 0 100%, 0 20%);
    }
  }

  &__group {
    @include size(100%);
    padding-top: 70px;
  }
}

.typewriter {
  animation: none;
}
.typewriter__caret {
  color: $primary;
}
</style>
