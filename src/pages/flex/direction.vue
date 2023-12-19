<script setup lang="ts">
const direction = ref()
const justify = ref()
const align = ref()
</script>

<template>
  <div h-full w-full flex-col items-center>
    <div>
      <DirectionControl v-model:direction="direction" mt-10 />
      <AlignControl v-model:align="align" v-model:justify="justify" mt-10 />
    </div>
    <div grow>
      <Container class="gap-2" :class="[direction, justify, align]">
        <div bg-red p-6 border="~ gray/70">
          1
        </div>
        <div bg-green p-6 border="~ gray/70">
          2
        </div>
        <div bg-gray p-6 border="~ gray/70">
          3
        </div>
      </Container>
    </div>
  </div>
</template>
