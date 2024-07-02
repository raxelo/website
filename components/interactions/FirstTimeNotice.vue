<script setup lang="ts">
import Notice from "@/components/ui/Notice.vue";
import { useLocalStorage } from "@vueuse/core";

const isFirstTime = useLocalStorage("first-time", true);
const mounted = ref(false);
onMounted(() => (mounted.value = true));
</script>

<template>
  <Notice :show="isFirstTime && mounted">
    <span class="select-none absolute -top-5 -left-4 text-3xl">🎈</span>
    <div class="select-none">
      <strong class="text-xl">First time visitor?</strong>
      <div class="text-xs mt-4 mb-0 flex justify-between">
        <a
          href="mailto:lucas@raxel.co"
          class="bg-black text-white px-2 py-1 font-bold hover:animate-pulse hover:duration-500"
          >Let's chat!</a
        >
        <button
          @click="isFirstTime = false"
          type="button"
          class="hover:opacity-50"
        >
          dismiss
        </button>
      </div>
    </div>
  </Notice>
</template>
