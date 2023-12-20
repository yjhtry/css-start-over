<script setup lang="ts">
const direction = ref()
</script>

<template>
  <div h-full w-full flex-col items-center>
    <DirectionControl v-model:direction="direction" mt-10 />
    <div grow>
      <Container class="flex-wrap gap-2" :class="[direction]">
        <template v-for="_i in 3" :key="_i">
          <div bg-red p-6 border="~ gray/70">
            1
          </div>
          <div bg-green p-6 border="~ gray/70">
            2
          </div>
          <div bg-gray p-6 border="~ gray/70">
            3
          </div>
        </template>
      </Container>
    </div>
  </div>
</template>
