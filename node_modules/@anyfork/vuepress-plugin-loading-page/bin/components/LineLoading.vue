<template>
  <div class="load-container">
    <div class="container">
      <div class="boxLoading boxLoading1" :style="{ '--color': color }"></div>
      <div class="boxLoading boxLoading2" :style="{ '--color': color }"></div>
      <div class="boxLoading boxLoading3" :style="{ '--color': color }"></div>
      <div class="boxLoading boxLoading4" :style="{ '--color': color }"></div>
      <div class="boxLoading boxLoading5" :style="{ '--color': color }"></div>
    </div>
  </div>
</template>

<script lang="js">
import { defineComponent,ref } from 'vue'
export default defineComponent({
  name:"LineLoading",
  setup(){
    const color = ref(COLOR || '#3eaf7c')
    return {color}
  }
})
</script>
<style scoped lang="css">
.load-container {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px auto;
}
.load-container .container {
  height: 60px;
  text-align: center;
  font-size: 10px;
}
.load-container .container .boxLoading {
  background-color: var(--color);
  height: 100%;
  width: 3px;
  display: inline-block;
  margin: 0px 5px;
  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}
.load-container .container .boxLoading2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.load-container .container .boxLoading3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.load-container .container .boxLoading4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.load-container .container .boxLoading5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
