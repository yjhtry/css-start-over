<script setup lang="ts">
const el = ref(null)
const { width } = useElementSize(el)
</script>

<template>
  <div full center>
    <div ref="el" text="white dark:black" class="w-[max(200px,_50vw)]" h-20 center bg="base">
      {{ width }}
    </div>
  </div>
</template>
