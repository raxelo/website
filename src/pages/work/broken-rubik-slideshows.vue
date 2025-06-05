<script setup lang="ts">
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import LineMdLoadingLoop from "~icons/line-md/loading-loop";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const onUpdate = (isOpen: boolean) => {
	if (!isOpen) {
		router.push("/work");
	}
};

const loadingStates = ref<Record<string, boolean>>({});
const loadedIframes = ref<Record<string, boolean>>({});
const hoverTimeouts = ref<Record<string, NodeJS.Timeout>>({});

const handleTooltipOpen = (url: string) => {
	// Clear any existing timeout
	if (hoverTimeouts.value[url]) {
		clearTimeout(hoverTimeouts.value[url]);
	}

	// Delay iframe loading slightly to avoid loading on quick hovers
	hoverTimeouts.value[url] = setTimeout(() => {
		if (!loadedIframes.value[url]) {
			loadingStates.value[url] = true;
			loadedIframes.value[url] = true;
		}
	}, 200);
};

const handleTooltipClose = (url: string) => {
	// Clear timeout if user stops hovering quickly
	if (hoverTimeouts.value[url]) {
		clearTimeout(hoverTimeouts.value[url]);
		delete hoverTimeouts.value[url];
	}
};

const handleIframeLoad = (url: string) => {
	loadingStates.value[url] = false;
};

const slideshows = [
	{
		title: "SuiteCommerce Monitoring",
		url: "https://suitecommerce-monitoring-slides.netlify.app/",
	},
	{
		title: "SuiteCommerce CI",
		url: "https://suitecommerce-ci-slides.netlify.app/",
	},
	{
		title: "CLI",
		url: "https://cli-slides.netlify.app/",
	},
	{
		title: "ESNext in NetSuite",
		url: "https://esnext-in-netsuite-slides.netlify.app/",
	},
	{
		title: "Toasts",
		url: "https://infallible-darwin-18a83a.netlify.app/",
	},
	{
		title: "Docker",
		url: "https://docker-slides.netlify.app/",
	},
	{
		title: "Sass Engine",
		url: "https://sass-engine-slides.netlify.app/",
	},
	{
		title: "SuiteQL",
		url: "https://suiteql-slides.netlify.app/",
	},
];
</script>

<template>
  <Dialog default-open @update:open="onUpdate">
    <DialogContent class="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Broken Rubik Slideshows</DialogTitle>
        <DialogDescription>
          Slideshows I created during my time at Broken Rubik. Hover to preview
          or click to open in a new tab.
        </DialogDescription>
      </DialogHeader>

      <TooltipProvider :delay-duration="100" :skip-delay-duration="300">
        <div class="py-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="slide in slideshows" :key="slide.url" class="group relative">
              <Tooltip>
                <TooltipTrigger as-child>
                  <a :href="slide.url" target="_blank" rel="noopener noreferrer"
                    class="block p-4 rounded-lg border hover:border-blue-300 transition-all duration-200 bg-white will-change-transform"
                    @mouseenter="handleTooltipOpen(slide.url)" @mouseleave="handleTooltipClose(slide.url)">
                    <div class="flex items-center justify-between">
                      <span class="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {{ slide.title }}
                      </span>
                      <svg class="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-200"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <div
                      class="mt-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Click to launch
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent :arrow="false" side="top" class="p-0 border-0 bg-transparent">
                  <div class="w-80 h-60 rounded-lg overflow-hidden border bg-white transform-gpu">
                    <div class="h-8 bg-gray-100 border-b flex items-center px-3">
                      <div class="flex space-x-1">
                        <div class="w-3 h-3 rounded-full bg-red-400"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div class="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div class="ml-3 text-xs text-gray-600 truncate">
                        {{ slide.title }}
                      </div>
                    </div>
                    <div class="relative w-full h-52 bg-gray-50">
                      <!-- Loading animation -->
                      <div v-if="loadingStates[slide.url]"
                        class="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
                        <div class="flex flex-col items-center space-y-2">
                          <LineMdLoadingLoop class="h-6 w-6 text-blue-500" />
                          <span class="text-xs text-gray-500">Loading preview...</span>
                        </div>
                      </div>
                      <!-- Iframe - only render when needed -->
                      <iframe v-if="loadedIframes[slide.url]" :src="slide.url"
                        class="w-full h-full border-0 transition-opacity duration-300"
                        :class="{ 'opacity-0': loadingStates[slide.url], 'opacity-100': !loadingStates[slide.url] }"
                        loading="lazy" sandbox="allow-scripts allow-same-origin" @load="handleIframeLoad(slide.url)" />
                      <!-- Placeholder when not loaded -->
                      <div v-else
                        class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                        <div class="text-center">
                          <div class="w-12 h-12 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <p class="text-xs text-gray-500">Hover to preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </TooltipProvider>

      <div class="flex justify-end pt-4 border-t">
        <button @click="router.push('/work')"
          class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200">
          Close
        </button>
      </div>
    </DialogContent>
  </Dialog>
</template>
