<script lang="ts" setup>
import { ref, computed } from "vue";
import { codeToHtml } from "shiki";
import { Button } from "@/components/ui/button";
import MdiContentCopy from "~icons/mdi/content-copy";
import MdiCheck from "~icons/mdi/check";

const props = defineProps({
	code: {
		type: String,
		required: true,
	},
	lang: {
		type: String,
		default: "text",
	},
	theme: {
		type: String,
		default: "vitesse-light",
	},
	maxHeight: {
		type: String,
		default: "20rem",
	},
});

const html = ref("");
const isCopied = ref(false);
const codeWrapper = ref<HTMLDivElement | null>(null);

html.value = await codeToHtml(props.code, {
	lang: props.lang,
	theme: props.theme,
});

const copyCode = async () => {
	if (!props.code) return;
	try {
		await navigator.clipboard.writeText(props.code);
		isCopied.value = true;
		setTimeout(() => {
			isCopied.value = false;
		}, 2000);
	} catch (err) {
		console.error("Failed to copy code: ", err);
	}
};

const handleKeyDown = (event: KeyboardEvent) => {
	if (event.ctrlKey && event.key === "a") {
		event.preventDefault();
		const codeEl = codeWrapper.value?.querySelector("pre");
		if (codeEl) {
			const range = document.createRange();
			range.selectNode(codeEl);
			window.getSelection()?.removeAllRanges();
			window.getSelection()?.addRange(range);
		}
	}
};

const wrapperStyle = computed(() => ({
	maxHeight: props.maxHeight,
}));
</script>

<template>
  <div ref="codeWrapper"
    class="group relative my-6 overflow-scroll rounded-lg border bg-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background"
    :style="wrapperStyle" @keydown="handleKeyDown" tabindex="0">
    <Button variant="ghost" size="icon"
      class="absolute bg-muted right-3 top-3 z-10 h-7 w-7 opacity-0 transition-all duration-200 group-hover:opacity-100"
      @click="copyCode">
      <MdiCheck v-if="isCopied" class="h-4 w-4 text-green-500" />
      <MdiContentCopy v-else class="h-4 w-4" />
    </Button>

    <div v-html="html" class="h-full overflow-y-auto"></div>

    <div v-if="html.length > 400" class="scroll-fade pointer-events-none absolute bottom-0 left-0 right-0 flex h-16 items-end justify-center">
      <span class="mb-1 rounded-full bg-primary px-2 py-0.5 text-xs text-white backdrop-blur-sm">
        Scroll for more
      </span>
    </div>
  </div>
</template>

<style scoped>
/* 
  Scoped styles are used for elements that cannot be styled directly in the
  template, such as dynamically injected HTML from Shiki and pseudo-elements.
*/
:deep(.shiki) {
  padding: 1.25rem 1rem 1rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-family: "Geist Mono", "Fira Code", monospace;
  overflow-x: auto;
  height: 100%;
}

:deep(.shiki pre) {
  margin: 0;
}

:deep(.shiki::-webkit-scrollbar),
.group>div::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

:deep(.shiki::-webkit-scrollbar-track),
.group>div::-webkit-scrollbar-track {
  background-color: transparent;
}

:deep(.shiki::-webkit-scrollbar-thumb),
.group>div::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  border: 2px solid transparent;
  background-color: hsl(var(--muted-foreground) / 0.3);
  background-clip: content-box;
}

:deep(.shiki::-webkit-scrollbar-thumb:hover),
.group>div::-webkit-scrollbar-thumb:hover {
  background-color: hsl(var(--muted-foreground) / 0.5);
}

.scroll-fade {
  background: linear-gradient(to top, hsl(var(--background)), transparent);
}

.group>div:has(+ .scroll-fade):not(:hover)::-webkit-scrollbar {
  display: none;
}

.group>div:has(+ .scroll-fade):not(:hover)+.scroll-fade {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.group>div:has(+ .scroll-fade):hover+.scroll-fade {
  opacity: 0;
}
</style>
