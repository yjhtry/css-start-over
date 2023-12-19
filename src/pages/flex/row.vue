<script setup lang="ts">
const align = ref()
const justify = ref()
</script>

<template>
  <div h-full w-full flex-col items-center>
    <AlignControl v-model:align="align" v-model:justify="justify" mt-10 />
    <div grow>
      <Container class="gap-2" :class="[justify, align]">
        <div bg-red p-6 border="~ gray/70" />
        <div bg-green p-6 border="~ gray/70" />
        <div bg-gray p-6 border="~ gray/70" />
      </Container>
    </div>
  </div>
</template>
