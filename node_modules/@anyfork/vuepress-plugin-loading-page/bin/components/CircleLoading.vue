<template>
  <div class="load-container">
    <div class="container container1">
      <div class="circle circle1" :style="{'background-color':color}"></div>
      <div class="circle circle2" :style="{'background-color':color}"></div>
      <div class="circle circle3" :style="{'background-color':color}"></div>
      <div class="circle circle4" :style="{'background-color':color}"></div>
    </div>
    <div class="container container2">
      <div class="circle circle1" :style="{'background-color':color}"></div>
      <div class="circle circle2" :style="{'background-color':color}"></div>
      <div class="circle circle3" :style="{'background-color':color}"></div>
      <div class="circle circle4" :style="{'background-color':color}"></div>
    </div>
    <div class="container container3">
      <div class="circle circle1" :style="{'background-color':color}"></div>
      <div class="circle circle2" :style="{'background-color':color}"></div>
      <div class="circle circle3" :style="{'background-color':color}"></div>
      <div class="circle circle4" :style="{'background-color':color}"></div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: "CircleLoading",
  setup() {
    const color = ref(COLOR || '#3eaf7c')
    return { color }
  }
})
</script>

<style scoped lang="css">
.load-container {
  margin: 100px auto;
  width: 48px;
  height: 48px;
  position: relative;
}
.load-container .container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.load-container .container .circle {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load-container .container .circle1 {
  top: 0;
  left: 0;
}
.load-container .container .circle2 {
  top: 0;
  right: 0;
}
.load-container .container .circle3 {
  right: 0;
  bottom: 0;
}
.load-container .container .circle4 {
  left: 0;
  bottom: 0;
}
.load-container .container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load-container .container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.load-container .container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.load-container .container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
.load-container .container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load-container .container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.load-container .container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.load-container .container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.load-container .container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
.load-container .container3 .circle1 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.load-container .container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.load-container .container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.load-container .container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
  }
}

@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }

  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>
