<template>
  <div h-screen w-screen flex flex-col>
    <TheNav />
    <div flex grow>
      <TheSide />
      <RouterView />
    </div>
  </div>
</template>
