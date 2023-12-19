<template>
  <div h-full grow>
    <div mt-20 flex grow items-center justify-center>
      <div h-xl w-xl flex border="~ gray/70" :class="$attrs.class">
        <slot />
      </div>
    </div>
  </div>
</template>
