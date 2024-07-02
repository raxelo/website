<script setup lang="ts">
import { getTechnologyIconByKey } from "./TechnologyIcon";

const props = defineProps<{
  icon: string;
}>();

const logo = getTechnologyIconByKey(props.icon)!;

onMounted(() => {
  if (!logo) {
    console.error(`No logo found for key: ${props.icon}`);
  }
});
</script>

<template>
  <div class="w-6 h-6 relative group/icon mx-1">
    <span
      class="absolute whitespace-nowrap -top-6 left-1/2 -translate-x-1/2 bg-black bg-opacity-90 text-white py-1 px-3 text-xs hidden group-hover/icon:block"
    >
      {{ logo.name }}
    </span>
    <component :is="logo.component" class="w-full h-full" />
  </div>
</template>
