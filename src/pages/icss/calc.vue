<template>
  <div h-full w-full center flex>
    <div h-50 w-50 border="~ red" rounded-full>
      <div class="g-item" :style="{ '--delay': 0 }" h-6 w-6 rounded-full bg="base" />
      <div class="g-item" :style="{ '--delay': 0.5 }" h-6 w-6 rounded-full bg="base" />
      <div class="g-item" :style="{ '--delay': 1 }" h-6 w-6 rounded-full bg="base" />
      <div class="g-item" :style="{ '--delay': 1.5 }" h-6 w-6 rounded-full bg="base" />
      <div class="g-item" :style="{ '--delay': 2 }" h-6 w-6 rounded-full bg="base" />
      <div class="g-item" :style="{ '--delay': 2.5 }" h-6 w-6 rounded-full bg="base" />
    </div>
  </div>
</template>

<style scoped>
  .g-item {
  position: absolute;
  animation: rotate 3s infinite linear;
  animation-delay: calc(-1s * var(--delay, 1));
  transform-origin: 100px 100px;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
</style>
