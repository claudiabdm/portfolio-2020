<template>
  <header class="header">
    <nav class="navbar">
      <a
        v-for="section in sections"
        :class="['navbar__elem', { 'navbar__elem--selected': sectionOnView === section }]"
        :title="section"
        :key="section"
        @click="goTo(section)"
      >
        {{ section }}
      </a>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      sectionOnView: 'home',
      anchors: [] as Element[],
    };
  },
  props: {
    sections: {
      type: Array,
    },
  },
  mounted() {
    Object.entries(this.$parent.$refs).forEach(([, value]) => {
      const val = value as Vue;
      this.anchors.push(val.$el);
    });
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    goTo(section: string): void {
      this.$emit('refName', section);
    },
    onScroll() {
      const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
      this.anchors.some((anchor: Element, i) => {
        const { top } = anchor.getBoundingClientRect();
        const { bottom } = anchor.getBoundingClientRect();
        if (atBottom) {
          this.sectionOnView = 'contact' as string;
          return true;
        }
        if (top <= 0 && bottom - 1 >= 0) {
          this.sectionOnView = this.sections[i] as string;
          return true;
        }
        return false;
      });
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins/_mixins.scss';
@import '@/assets/styles/global/_variables.scss';

.header {
  @include fixed(0, 0, auto, 0);
  width: 100vw;
  height: $header-height;
  z-index: 1000;
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;

  &--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
  }
}

.navbar {
  @include flex(center, space-around);
  background-color: transparent;
  padding: 15px 46px;

  &__elem {
    @include flex(center, flex-end);
    flex-direction: column;
    position: relative;
    font-size: 3.75vw;
    letter-spacing: rem(2px);
    text-align: center;
    text-transform: capitalize;
    color: $secondary;
    transition: transform 0.15s ease-in-out;
    &::after {
      content: '';
      @include size(0, rem(2px));
      display: block;
      position: absolute;
      background-color: $secondary;
    }
    & + & {
      margin-left: 30px;
    }
    &:hover {
      cursor: pointer;
      transform: scale(1.15);
    }
    &--selected {
      @include flex(flex-start, flex-end);
      &::after {
        width: 0;
        animation: underline 0.25s ease-in-out 1 forwards;
      }
    }

    &:visited {
      color: $secondary;
    }
  }

  @media screen and (min-width: 640px) {
    &__elem {
      font-size: 2.75vw;
    }
  }

  @media screen and (min-width: 768px) {
    @include flex(center, flex-end);
    &__elem {
      font-size: 1.75vw;
      & + & {
        margin-left: 55px;
      }
    }
  }

  @keyframes underline {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
}
</style>
