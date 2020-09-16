<template>
  <ul class="list" :class="{ 'list--sm': smallTags }">
    <li v-visible-onscroll class="list__elem" v-for="tag in tags" :key="tag">{{ tag }}</li>
  </ul>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tags: {
      type: Array,
    },
    smallTags: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global/_variables.scss';
@import '@/assets/styles/mixins/_mixins.scss';

.list {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(rem(125px), 1fr));
  column-gap: rem(30px);
  row-gap: rem(30px);
  margin-top: 30px;

  &--sm {
    grid-template-columns: repeat(auto-fit, minmax(rem(70px), 1fr));
    column-gap: rem(10px);
    row-gap: rem(10px);
    margin: 10px 0;
  }

  &__elem {
    @include flex(center, center);
    padding: 5px;
    color: $base;
    border-radius: 10px;
    text-align: center;
    word-wrap: normal;
    box-shadow: $box-shadow-sharpen;
    transition: transform 0.15s ease-in-out, opacity 0.25s linear;

    &:hover {
      transform: scale(1.15);
    }

    @for $i from 1 through 20 {
      &:nth-child(#{$i}) {
        background-color: lighten($color: $primary, $amount: $i * 2%);
      }
    }

    .list--sm & {
      font-size: rem(10px);
      padding: 10px;
      border-radius: 6px;
      background-color: rgba($primary, 0.75);

      @media screen and (min-width: 768px) {
        font-size: 0.75rem;
        padding: 15px;
      }
    }
  }
}
</style>
