<template>
  <div full flex class="g-container">
    <div h-10 w-10 rounded-full class="ball" bg="black dark:white" />
  </div>
</template>

<style lang="scss" scoped>
.ball {
  offset-path: path('M 70 70 C 90 300, 400 70, 500 300 S 700 300, 800 300');
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
