<script lang="ts" setup>
import { technologyIcons, type IconKey } from "./TechnologyIcon";
import TechnologyIcon from "./TechnologyIcon.vue";

const props = defineProps<{
  icons?: IconKey[];
  class?: string;
}>();

const allIcons = technologyIcons.map((icon) => icon.key);
const sortedIcons = computed(() => (props.icons || allIcons).sort());
</script>

<template>
  <div :class="cn(props.class, 'flex gap-1 gap-y-2.5')">
    <TechnologyIcon v-for="icon in sortedIcons" :key="icon" :icon="icon" />
  </div>
</template>

