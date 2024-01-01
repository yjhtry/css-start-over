<template>
  <div full center>
    <div
      class="g-content"
      text="white dark:black"
      relative h-50 max-h-90 w-50 resize-y of-hidden bg="base"
    >
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem vitae quibusdam totam! Dignissimos accusamus sit iure porro perferendis dolore quos vitae asperiores doloremque obcaecati illum voluptatem dolores itaque laudantium in nisi suscipit tempora excepturi qui sapiente non, sint molestias? Iure praesentium officiis accusamus at necessitatibus. Hic quos, excepturi enim eaque consequuntur minima porro dolorem quam voluptatem dignissimos commodi assumenda tempora dolor, voluptatum mollitia autem. Dolores vitae sunt, perspiciatis officia id itaque asperiores ratione alias voluptatem debitis accusamus porro mollitia adipisci dolor architecto eos ut voluptates enim blanditiis suscipit iste, eaque ipsa voluptatibus. Eligendi dolor, in recusandae ex sed voluptate labore.
    </div>
  </div>
</template>

<style scoped>
.g-content::before {
  content: '↑';
  position: absolute;
  bottom: clamp(-99999px, (100% - 200px) * 10000, 10px);
  left: 50%;
  transform: translateX(-50%);
}
</style>
