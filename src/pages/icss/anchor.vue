<script setup lang="ts">
onMounted(() => {
  if (!CSS.supports('anchor-name: --anchor-1'))
    // eslint-disable-next-line no-alert
    alert(`Your browser does not support CSS Anchors \n You can enable "Experimental Web Platform features" in chrome://flags/ `)
})
</script>

<template>
  <div full center>
    <ul class="g-container" flex>
      <li>Lorem</li>
      <li>Numquam</li>
      <li>Perferendis</li>
      <li>Blanditiis</li>
      <li>Modi</li>
      <li>Incidunt</li>
      <li>Sunt</li>
      <li>Obcaecati</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .g-container {
  position: relative;

  li {
    cursor: pointer;
    text-align: center;
    padding: 0 6px; // ! 要想transition position 生效, li 之间不能有间隔
  }

  &::before {
    content: '';
    position: absolute;
    height: 4px;
    background: transparent;
    bottom: 0;
    left: anchor(var(--target) left);
    right: anchor(var(--target) right);
    transition: 0.3s all;
    transform: scaleX(5);
  }
}

ul:hover::before {
  background: #fff;
  transform: scaleX(1);
}

@for $i from 1 to 9 {
  ul:has(li:nth-child(#{$i}):hover) {
    --target: --anchor-#{$i};
  }

  li:nth-child(#{$i}) {
    anchor-name: --anchor-#{$i};
  }
}
</style>
