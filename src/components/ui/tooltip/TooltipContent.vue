<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import {
	TooltipArrow,
	TooltipContent,
	type TooltipContentEmits,
	type TooltipContentProps,
	TooltipPortal,
	useForwardPropsEmits,
} from "reka-ui";
import { cn } from "@/lib/utils";

defineOptions({
	inheritAttrs: false,
});

const props = withDefaults(
	defineProps<
		TooltipContentProps & { class?: HTMLAttributes["class"]; arrow?: boolean }
	>(),
	{
		sideOffset: 4,
		arrow: true,
	},
);

const emits = defineEmits<TooltipContentEmits>();

const delegatedProps = reactiveOmit(props, "class");
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
  <TooltipPortal>
    <TooltipContent data-slot="tooltip-content" v-bind="{ ...forwarded, ...$attrs }"
      :class="cn('bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 z-50 w-fit rounded-md px-2 py-1 text-xs text-balance', props.class)">
      <slot />

      <TooltipArrow
        v-if="arrow"
        class="bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
    </TooltipContent>
  </TooltipPortal>
</template>
