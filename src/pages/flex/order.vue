<script setup lang="ts">
const base = Array.from({ length: 5 }, (_, i) => ({ value: i + 1, key: generateKey(), color: randomColor() }))
const items = shallowRef(base)

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

function generateKey() {
  return Math.random().toString(36).slice(2, 9)
}

function shuffleArray(array: any[]) {
  return array.sort(() => Math.random() - 0.5)
}

function shuffleArrayOrderUnique(array: any[]) {
  const values = array.map(item => item.value)
  const uniqueValues = [...new Set(values)]
  const shuffledValues = shuffleArray(uniqueValues)
  return array.map(item => ({ ...item, value: shuffledValues.pop() }))
}

function onShuffle() {
  items.value = [...shuffleArrayOrderUnique(items.value)]
}

watchEffect(() => {
  // eslint-disable-next-line no-console
  console.log([...items.value.map(item => item.value)])
})
</script>

<template>
  <button @click="onShuffle">
    Shuffle
  </button>
  <Container>
    <div v-for="(item, index) in items" :key="item.key" :style="{ ['background-color']: item.color, order: item.value }" p-6>
      <div>index: {{ index }}</div>
      <div>order: {{ item.value }}</div>
    </div>
  </Container>
</template>
