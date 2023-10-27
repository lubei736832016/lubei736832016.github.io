<template>
  <div id="loader-wrapper">
    <h3 class="title">
      {{ $site.title || $localeConfig.title }}
    </h3>
    <p class="description">
      {{ $site.description || $localeConfig.description }}
    </p>
    <component :is="mode"></component>
  </div>
</template>
<script lang="js">
import RotateLoading from './components/RotateLoading.vue'
import BoxLoading from './components/BoxLoading.vue'
import CircleLoading from './components/CircleLoading.vue'
import PointLoading from './components/PointLoading.vue'
import LineLoading from './components/LineLoading.vue'
import DefaultLoading from './components/DefaultLoading.vue'
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: "LoadingPage",
  setup() {
    const componentObj = [RotateLoading, BoxLoading, CircleLoading, LineLoading, PointLoading, DefaultLoading]
    const mode = computed(() => {
      if (RANDOM) {
        return componentObj[Math.floor(Math.random() * 5)]
      } else {
        return componentObj.find((item) => item.name=== MODE)
      }
    })
    return { mode }
  }
})
</script>
<style lang="css" scoped>
#loader-wrapper {
  height: 100vh;
  width: 100vw;
  background: #fff;
  position: absolute;
  z-index: 1000000;
  background: var(--background-color);
}

#loader-wrapper .loader-main {
  position: fixed;
  width: 120px;
  height: 50px;
  top: 45%;
  left: 50%;
  z-index: 555;
  transform: translate(-50%, 0);
}

#loader-wrapper .loader-main div:nth-child(2) {
  animation: pacman-balls 1s 0s infinite linear;
}

#loader-wrapper .loader-main div:nth-child(3) {
  animation: pacman-balls 1s 0.33s infinite linear;
}

#loader-wrapper .loader-main div:nth-child(4) {
  animation: pacman-balls 1s 0.66s infinite linear;
}

#loader-wrapper .loader-main div:nth-child(5) {
  animation: pacman-balls 1s 0.99s infinite linear;
}

#loader-wrapper .loader-main div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid #f00;
  border-left: 25px solid #f00;
  border-bottom: 25px solid #f00;
  border-radius: 25px;
  animation: rotate_pacman_half_up 0.5s 0s infinite;
}

#loader-wrapper .loader-main div:nth-child(2) {
  width: 0px;
  height: 0px;
  border-right: 25px solid transparent;
  border-top: 25px solid #f00;
  border-left: 25px solid #f00;
  border-bottom: 25px solid #f00;
  border-radius: 25px;
  animation: rotate_pacman_half_down 0.5s 0s infinite;
  margin-top: -50px;
}

#loader-wrapper .loader-main div:nth-child(3),
#loader-wrapper .loader-main div:nth-child(4),
#loader-wrapper .loader-main div:nth-child(5),
#loader-wrapper .loader-main div:nth-child(6) {
  background-color: #f00;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  width: 10px;
  height: 10px;
  position: absolute;
  transform: translate(0, -6.25px);
  top: 25px;
  left: 100px;
}

#loader-wrapper .title {
  margin: 8rem auto 2rem;
  text-align: center;
  color: #008000;
  color: var(--text-color);
  font-size: 30px;
  box-sizing: border-box;
  padding: 0 10px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

#loader-wrapper .description {
  margin: auto;
  text-align: center;
  color: #008000;
  color: var(--text-color);
  font-size: 22px;
  box-sizing: border-box;
  padding: 0 10px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

@-moz-keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}

@-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}

@-o-keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}

@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }

  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}

@-moz-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@-webkit-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@-o-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}

@-moz-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@-webkit-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@-o-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}

@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
</style>
