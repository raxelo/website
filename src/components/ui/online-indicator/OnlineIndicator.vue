<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isOnline = ref(false);

const MINUTE_INTERVAL = 60 * 1000;

function checkOnlineStatus() {
	const now = new Date();

	const utcHours = now.getUTCHours();
	const utc3Hours = (utcHours - 3 + 24) % 24;

	// Online between 10am and 8pm (10:00 - 20:00) UTC-3
	isOnline.value = utc3Hours >= 10 && utc3Hours < 20;
}

let interval: ReturnType<typeof setInterval>;

onMounted(() => {
	checkOnlineStatus();

	interval = setInterval(checkOnlineStatus, MINUTE_INTERVAL);
});

onUnmounted(() => {
	clearInterval(interval);
});
</script>

<template>
  <div v-if="isOnline" class="flex items-center gap-1.5 text-xs">
    <span class="relative flex h-2 w-2">
      <span class="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
    </span>
    <span class="font-mono">online now</span>
  </div>
</template>
