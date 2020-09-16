<template>
  <ul class="card-list">
    <li v-visible-onscroll
      v-for="project in projectList"
      :key="project.name"
      class="card card-list__elem"
    >
      <div class="window">
        <div class="window__bar">
          <div class="window__buttons">
            <svg class="window__button">
              <circle cx="12" cy="12" r="6" />
            </svg>
            <svg class="window__button">
              <circle cx="12" cy="12" r="6" />
            </svg>
            <svg class="window__button">
              <circle cx="12" cy="12" r="6" />
            </svg>
          </div>
          <span class="window__title">{{ project.name }}</span>
        </div>
        <div class="window__viewport card__info">
          <!-- <img :src="project.screenshot" class="window__screenshot" /> -->
          <video class="window__screenshot" autoplay loop>
            <source :src="project.screenshot" type="video/mp4" />
          </video>
          <div class="card__info-wrapper">
            <p class="card__desc">{{ project.desc }}</p>
            <Tags :tags="project.technologies" :smallTags="true" />
            <div class="card__buttons">
              <a
                class="card__button"
                :href="project.demo"
                target="_blank"
                rel="noreferrer"
                >Demo</a
              >
              <a
                class="card__button"
                :href="project.code"
                target="_blank"
                rel="noreferrer"
                >Code</a
              >
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Tags.vue';

export default Vue.extend({
  props: {
    projectList: {
      type: Array,
    },
  },
  components: {
    Tags,
  },
  data() {
    return {
      projectCards: [],
    };
  },
  mounted() {
    this.projectCards = Array.from(
      document.documentElement.querySelectorAll('.section'),
    );
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global/_variables.scss';
@import '@/assets/styles/mixins/_mixins.scss';

.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(rem(250px), 400px));
  column-gap: rem(100px);
  row-gap: rem(50px);
  margin-top: 30px;
  justify-content: center;

  &__elem {
    @include size(100%, max-content);
    background-color: #fff;
    border-radius: 8px;
    transition: all 0.5s linear;
  }
}

.card {
  &__info {
    font-size: rem(12px);
    position: relative;
    @media screen and (min-width: 768px) {
      font-size: 2vw;
    }
    @media screen and (min-width: 1024px) {
      font-size: 1rem;
    }
  }

  &__info-wrapper {
    @include absolute(0, 0, 0, 0);
    @include size(100%, 100%);
    @include flex(center, center);
    flex-direction: column;
    opacity: 0;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 15px;
    background-color: rgba($color: #000000, $alpha: 0);
    font-family: $font-primary;
    transition: all 0.2s ease-in-out;
    will-change: background-color;
    overflow: hidden;
    .card__info:hover & {
      cursor: pointer;
      opacity: 1;
      background-color: rgba($color: #000000, $alpha: 0.75);
    }
  }

  &__buttons {
    width: 100%;
    @include flex(center, center);
  }

  &__button {
    width: 100px;
    border: 1px solid $base;
    border-radius: 6px;
    padding: 5px 10px;
    color: $base;
    line-height: 1.5;
    text-align: center;
    transform: translate3d(0, 100%, 0);
    transition: transform 0.25s ease-in-out;
    will-change: transform, background-color;

    &:hover {
      background-color: rgba($color: $base, $alpha: 0.5);
    }

    .card__info:hover & {
      transform: translate3d(0, 0, 0);
    }

    & + & {
      margin-left: 20px;
    }
  }

  &__desc {
    @include size(100%, max-content);
    color: #fff;
    text-align: center;
    line-height: 1.5;
    transform: translate3d(0, -100%, 0);
    transition: transform 0.25s ease-in-out;
    will-change: transform;

    .card__info:hover & {
      transform: translate3d(0, 0, 0);
    }
  }
}
</style>
