<template>
  <section class="main">
    <div class="terminal">
      <div class="terminal__bar">
        <div class="terminal__buttons">
          <svg class="terminal__button">
            <circle cx="12" cy="12" r="6" />
          </svg>
          <svg class="terminal__button">
            <circle cx="12" cy="12" r="6" />
          </svg>
          <svg class="terminal__button">
            <circle cx="12" cy="12" r="6" />
          </svg>
        </div>
        <span class="terminal__title">zsh</span>
      </div>
      <div class="terminal__output">Last login: {{ new Date() }}</div>
      <div class="terminal__prompt">
        <span class="terminal__username">claudiabdm</span
        ><span class="terminal__dollar">
          $
        </span>
        <div class="terminal__text">node portfolio.js</div>
      </div>
      <div class="terminal__output">
        <div class="terminal__text terminal__text--output">
          Hello!
        </div>
        <div class="terminal__text terminal__text--output">
          I'm Claudia Benito.
        </div>
        <div class="terminal__text terminal__text--output">
          A front-end developer.
        </div>
      </div>
      <div class="terminal__prompt">
        <span class="terminal__username">claudiabdm</span
        ><span class="terminal__dollar">
          $
        </span>
        <div class="terminal__caret">
          _
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global/_variables.scss';
@import '@/assets/styles/mixins/_mixins.scss';

h1 {
  font-size: 3em;
  margin-bottom: 0.2em;
}

h2 {
  font-size: 2em;
}

.main {
  @include flex(center, center);
  flex-direction: column;
  height: 100vh;
}

.terminal {
  @include size(calc(100vw - 20vw), calc(100vh - 40vh));
  border-radius: 8px;
  border: 1px solid $grey-150;
  color: #fff;
  background-color: $grey-400;
  font-size: rem(12px);
  font-family: $font-secondary;
  box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.25);
  transform: translate3d(0, 100%, 0) scale(0);
  animation: openIn 1s cubic-bezier(0.23, 1, 0.32, 1) 1 1s forwards;

  &__bar {
    @include flex(center, flex-start);
    @include size(100%, rem(25px));
    position: relative;
    border-bottom: 1px solid $grey-150;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    padding-left: 10px;
    background: linear-gradient(180deg, $grey-50, $grey-100);
  }

  &__title {
    position: absolute;
    width: 100%;
    color: $grey-200;
    font-family: $font-primary;
    font-size: rem(12px);
    text-align: center;
  }

  &__buttons {
    @include flex(center, flex-start);
  }

  &__button {
    @include size(rem(24px), rem(24px));
    stroke: $grey-150;
    stroke-width: 0.5;
    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        fill: $primary;
      }
    }
  }

  &__prompt {
    @include flex(center, flex-start);
    padding-left: 10px;
    visibility: hidden;
    animation: enter 3s linear 1.75s;
    animation-fill-mode: forwards;

    &:not(:nth-child(3)) {
      animation-delay: 3.5s;
    }

    &:last-child {
      animation-delay: 4.25s;
    }
  }

  &__username {
    color: $secondary;
  }

  &__dollar {
    color: $primary;
    margin-right: 2.5px;
  }

  &__text {
    position: relative;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 0.05rem;
    animation: typing 1.75s steps(60, end) 2.5s backwards;

    &--output {
      visibility: hidden;
      animation: enter 1s linear 3.5s;
      animation-fill-mode: forwards;

      &:nth-child(2) {
        animation-delay: 3.75s;
      }

      &:nth-child(3) {
        animation-delay: 4s;
      }
    }
  }

  &__output {
    @include flex(flex-start, center);
    flex-direction: column;
    padding-left: 10px;
    visibility: hidden;
    animation: enter 1s linear 1.75s;
    animation-fill-mode: forwards;
  }

  &__caret {
    line-height: 0;
    color: transparent;
    animation: blink-caret 0.9s step-end 0.5s infinite normal;
  }
}
/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from {
    color: #fff;
  }
  50% {
    color: transparent;
  }
}

@keyframes enter {
  0% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}

@keyframes openIn {
  0% {
    transform: scale(0) translate3d(0, 100%, 0);
  }
  100% {
    transform: scale(1) translate3d(0, 0, 0);
  }
}
</style>
