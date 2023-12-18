<script setup lang="ts">
const justifyOptions = ['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly'] as const
const alignItems = ['items-stretch', 'items-start', 'items-center', 'items-end', 'items-baseline', 'items-revert'] as const
const justify = ref<typeof justifyOptions[number]>('justify-start')
const align = ref<typeof alignItems[number]>('items-stretch')
</script>

<template>
  <div h-full grow>
    <div text-center>
      {{ $route.path }}
    </div>
    <div mt-6 flex justify-center gap-10>
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
    <div mt-20 flex grow items-center justify-center>
      <div h-xl w-xl flex border="~ gray/70" :class="[$attrs.class, justify, align]">
        <slot />
      </div>
    </div>
  </div>
</template>
