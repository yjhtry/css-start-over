<script setup lang="ts">
const el = ref(null)
const { width } = useElementSize(el)
</script>

<template>
  <div full center>
    <div ref="el" class="w-[clamp(200px,_50vw,_500px)]" h-20 center text="white dark:black" bg="base">
      {{ width }}
    </div>
  </div>
</template>
