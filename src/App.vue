<script setup lang="ts">
import { useRouter } from "vue-router";
import { cn } from "./lib/utils";

const links = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "Work",
		href: "/work",
	},
	{
		text: "Blog",
		href: "/blog",
	},
];

const { currentRoute } = useRouter();
</script>

<template>
  <header class="max-w-3xl mx-auto px-2 pt-1">
    <nav class="flex items-center justify-center gap-6">
      <router-link
        :class="cn('py-3 px-2 text-xs border-b-2 border-transparent no-underline hover:text-black', currentRoute.path === link.href ? 'text-black border-black' : 'text-muted-foreground/60')"
        v-for="link in links" :key="link.href" :to="link.href">
        {{ link.text }}
      </router-link>
    </nav>
  </header>

  <main class="max-w-3xl mx-auto px-2 pb-24 pt-12">
    <RouterView />
  </main>

  <footer class="w-full max-w-3xl text-sm mx-auto px-2 pb-8 flex flex-wrap justify-between">
    <span class="font-bold text-lg w-full">
      lucas.goyeche.dev
    </span>

    <p class="w-full sm:w-auto text-muted-foreground/70">Built using <a target="_blank"
        href="https://vite.dev/">vite</a>
      and <a target="_blank" href="https://vuejs.org/">Vue.js</a></p>

    <p class="text-muted-foreground/70">&copy; 2025-present Lucas Goyeche.</p>
  </footer>
</template>
