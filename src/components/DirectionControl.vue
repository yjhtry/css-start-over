<script setup lang="ts">
defineProps<{
  direction: string
}>()

const emit = defineEmits<{
  'update:direction': [direction: string]
}>()

const directionOptions = ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'] as const

const direction = ref(directionOptions[0])

watch(
  direction,
  direction => emit('update:direction', direction),
  { immediate: true },
)
</script>

<template>
  <div flex justify-center gap-10>
    <select v-model="direction" text-black>
      <option disabled value="">
        Please select one
      </option>
      <option v-for="value in directionOptions" :key="value" :value="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>
