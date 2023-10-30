<template>
  <div class="load-container">
    <div class="load load1" :style="{ '--color': color }"></div>
    <div class="load load2" :style="{ '--color': color }"></div>
    <div class="load" :style="{ '--color': color }"></div>
  </div>
</template>

<script lang="js">
import { defineComponent,ref } from 'vue'
export default defineComponent({
  name:"PointLoading",
  setup(){
    const color = ref(COLOR || '#3eaf7c')
    return {color}
  }
})
</script>
<style scoped lang="css">
.load-container {
  margin: 100px auto;
  width: 150px;
  text-align: center;
}
.load-container .load {
  width: 20px;
  height: 20px;
  background-color: var(--color);
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.load-container .load1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.load-container .load2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
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
