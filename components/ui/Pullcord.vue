<script lang="ts" setup>
import { useSound } from "@vueuse/sound";
import cord from "../../assets/audio/cord.mp3";

const colorMode = useColorMode();
const toggleDark = () => {
  play();
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const { play } = useSound(cord, { volume: 0.12 });
</script>

<template>
  <button
    @click="() => toggleDark()"
    type="button"
    class="absolute top-0 right-8 z-[100] flex flex-col items-center justify-center px-3 mix-blend-difference group"
  >
    <span
      class="w-1 h-6 bg-white block group-active:h-8 transition-all duration-600"
    >
    </span>
    <span class="w-3 -mt-1 h-3 rounded-b-none rounded-full bg-white block">
    </span>
  </button>
</template>
