<template>
  <div full flex class="g-container">
    <div h-10 w-10 rounded-full class="ball" bg="black dark:white" />
  </div>
</template>

<style lang="scss" scoped>
.ball {
  offset-path: path('M 20 20 H 500 V 500 H 0 L 20 20');
  animation: move 3s infinite alternate;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
</style>
