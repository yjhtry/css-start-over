<template>
  <div full center flex>
    <div h-120 w-120>
      <div absolute h-10 w-10 rounded-full class="ball ball1" bg="black dark:white" />
      <div absolute h-10 w-10 rounded-full class="ball ball2" bg="orange" />
      <div absolute h-10 w-10 rounded-full class="ball ball3" bg="green" />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 431.7 422.6"><path d="M1.1 77.8c101.7-101.7 266.5-101.7 368.2 0 81.3 81.3 81.3 213.2 0 294.5-65.1 65.1-170.6 65.1-235.6 0-52.1-52.1-52.1-136.5 0-188.5 41.6-41.6 109.2-41.6 150.8 0 33.3 33.3 33.3 87.3 0 120.6-26.7 26.7-69.9 26.7-96.5 0-21.3-21.3-21.3-55.9 0-77.2 17.1-17.1 44.7-17.1 61.8 0 13.6 13.6 13.6 35.8 0 49.4-10.9 10.9-28.6 10.9-39.5 0-8.7-8.7-8.7-22.9 0-31.6 7-7 18.3-7 25.3 0" fill="none" stroke="#5e5e7d" stroke-width="3" stroke-miterlimit="10" /></svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ball {
  offset-path: path(
    'M.4 76.8C102-24.9 266.9-24.9 368.5 76.8c81.3 81.3 81.3 213.2 0 294.5-65.1 65.1-170.6 65.1-235.6 0-52.1-52.1-52.1-136.5 0-188.5 41.6-41.6 109.2-41.6 150.8 0 33.3 33.3 33.3 87.3 0 120.6-26.7 26.7-69.9 26.7-96.5 0-21.3-21.3-21.3-55.9 0-77.2 17.1-17.1 44.7-17.1 61.8 0 13.6 13.6 13.6 35.8 0 49.4-10.9 10.9-28.6 10.9-39.5 0-8.7-8.7-8.7-22.9 0-31.6 7-7 18.3-7 25.3 0'
  );
  animation: move 4.5s infinite ease-in-out;
  transform: scale(0);
}

.ball2 {
  animation-delay: 1.5s;
}

.ball3 {
  animation-delay: 3s;
}

svg {
  width: 429px;
}

@keyframes move {
  0% {
    offset-distance: 0%;
    transform: scale(1);
    opacity: 1;
  }
  90% {
    offset-distance: 100%;
    transform: scale(0.2);
    opacity: 1;
  }
  100% {
    offset-distance: 100%;
    transform: scale(0.2);
    opacity: 0;
  }
}
</style>
