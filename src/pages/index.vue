<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

const { x, y } = useMouse()
</script>

<template>
  <div>
    <div>{{ `(${x}, ${y})` }}</div>
  </div>
</template>
