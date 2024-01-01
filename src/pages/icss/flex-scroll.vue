<script setup lang="ts">
const count = ref(2)

function toggle() {
  count.value = count.value === 2 ? 12 : 2
}
</script>

<template>
  <div full center flex-col gap-5>
    <button btn @click="toggle">
      toggle
    </button>
    <div bg="orange" h-40 w-125 center flex of-auto>
      <div max-w-full flex gap-2.5>
        <div v-for="i in count" :key="i" h-30 w-30 center shrink-0 bg-green>
          {{ i }}
        </div>
      </div>
    </div>
    <div>margin auto</div>
    <div bg="orange" h-40 w-125 flex items-center gap-2.5 of-auto>
      <div v-for="i in count" :key="i" m-auto h-30 w-30 center shrink-0 bg-green>
        {{ i }}
      </div>
    </div>
    <div>safe</div>
    <div bg="orange" class="container" h-40 w-125 flex items-center gap-2.5 of-auto>
      <div v-for="i in count" :key="i" h-30 w-30 center shrink-0 bg-green>
        {{ i }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
  justify-content: safe center;
}
</style>
