<script lang="ts" setup>
defineProps<{
  show?: boolean;
}>();
</script>

<template>
  <Transition name="slide">
    <div
      v-if="show"
      class="fixed right-0 bottom-[18%] z-[10000] text-black bg-teal-300 border border-zinc-700 border-r-0 py-2 px-4"
    >
      <slot />
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active {
  animation: slide-in 4s;
}

.slide-leave-active {
  animation: slide-in 4s reverse;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%) rotate(-3deg);
    opacity: 0;
  }

  13% {
    transform: translateX(75%) rotate(3deg);
    opacity: 0.1;
  }

  25% {
    transform: translateX(75%) rotate(3deg);
    opacity: 0.1;
  }

  38% {
    transform: translateX(50%) rotate(-3deg);
    opacity: 0.4;
  }

  50% {
    transform: translateX(50%) rotate(-3deg);
    opacity: 0.4;
  }

  62% {
    transform: translateX(25%) rotate(3deg);
    opacity: 1;
  }

  75% {
    transform: translateX(25%) rotate(3deg);
    opacity: 1;
  }

  84% {
    transform: translateX(0%) rotate(0deg);
  }

  100% {
    transform: translateX(0%) rotate(0);
  }
}
</style>
