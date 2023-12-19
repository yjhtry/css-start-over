<script setup lang="ts">
defineProps<{
  justify: string
  align: string
}>()

const emit = defineEmits<{
  'update:justify': [justify: string]
  'update:align': [align: string]
}>()
const { justify, align } = useAlignControl()

watch(
  justify,
  justify => emit('update:justify', justify),
  { immediate: true },
)
watch(
  align,
  align => emit('update:align', align),
  { immediate: true },
)
</script>

<template>
  <div flex justify-center gap-10>
    <select v-model="justify" text-black>
      <option disabled value="">
        Please select one
      </option>
      <option v-for="value in justifyOptions" :key="value" :value="value">
        {{ value }}
      </option>
    </select>
    <select v-model="align" text-black>
      <option disabled value="">
        Please select one
      </option>
      <option v-for="value in alignItems" :key="value" :value="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>
