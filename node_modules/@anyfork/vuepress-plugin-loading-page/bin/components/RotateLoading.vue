<template>
  <div class="loader-container">
    <div class="loader-child" :style="{ '--color': color }"></div>
    <div class="loader-child" :style="{ '--color': color }"></div>
    <div class="loader-child" :style="{ '--color': color }"></div>
  </div>
</template>
<script lang="js">
import { defineComponent,ref } from 'vue'
export default defineComponent({
  name:"RotateLoading",
  setup(){
    const color = ref(COLOR || '#3eaf7c')
    return {color}
  }
})
</script>
<style lang="css" scoped>
.loader-container {
  width: 100px;
  height: 100px;
  perspective: 780px;
  margin: 100px auto;
}

.loader-child {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
}
.loader-child:nth-of-type(1) {
  left: 0%;
  top: 0%;
  animation: rotate-one 1.15s linear infinite;
  border-bottom: 4px solid var(--color);
}
.loader-child:nth-of-type(2) {
  right: 0%;
  top: 0%;
  animation: rotate-two 1.15s linear infinite;
  border-right: 4px solid var(--color);
}
.loader-child:nth-of-type(3) {
  right: 0%;
  bottom: 0%;
  animation: rotate-three 1.15s linear infinite;
  border-top: 4px solid var(--color);
}

@keyframes rotate-one {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes rotate-two {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes rotate-three {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
