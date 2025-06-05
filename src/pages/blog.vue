<script setup lang="ts">
import NotoNote from "~icons/noto/spiral-notepad";

import { computed, ref } from "vue";

interface BlogPost {
	id: string;
	title: string;
	slug: string;
	date: Date;
	excerpt?: string;
	externalUrl?: string;
}

const blogPosts = ref<BlogPost[]>([
	{
		id: "post-5",
		title: "The Future of Edge Computing and AI",
		slug: "future-edge-ai",
		date: new Date("2025-05-15"),
		excerpt:
			"Exploring the synergy between edge computing and artificial intelligence.",
	},
	{
		id: "post-1",
		title: "Getting Started with Vue 3 Composition API",
		slug: "vue-3-composition-api",
		date: new Date("2024-03-20"),
		excerpt:
			"A comprehensive guide to leveraging the Composition API in Vue 3.",
	},
	{
		id: "post-2",
		title: "Advanced TypeScript Patterns for Large Scale Applications",
		slug: "advanced-typescript-patterns",
		date: new Date("2024-07-10"),
		excerpt: "Deep dive into TypeScript patterns that help manage complexity.",
	},
	{
		id: "post-3",
		title: "The Importance of Developer Experience (DX)",
		slug: "developer-experience",
		date: new Date("2023-11-05"),
		excerpt: "Why focusing on DX leads to better products and happier teams.",
	},
	{
		id: "post-4",
		title: "A Look Back at 2022 in Tech",
		slug: "2022-tech-review",
		date: new Date("2023-01-15"),
		excerpt: "Reflections on the major technological advancements of 2022.",
	},
]);

const sortedPosts = computed(() => {
	return [...blogPosts.value].sort(
		(a, b) => b.date.getTime() - a.date.getTime(),
	);
});

const postsByYear = computed(() => {
	const groups: Record<string, BlogPost[]> = {};

	// Group posts by year. Posts within each year will maintain their sort order (newest first)
	// because `sortedPosts` is already sorted.
	for (const post of sortedPosts.value) {
		const year = post.date.getFullYear().toString();
		if (!groups[year]) {
			groups[year] = [];
		}
		groups[year].push(post);
	}

	// Get the year keys and sort them in descending order (e.g., "2025", "2024", "2023")
	const sortedYearKeys = Object.keys(groups).sort(
		(a, b) => Number(b) - Number(a),
	);

	return sortedYearKeys.map((yearKey) => ({
		year: yearKey,
		posts: groups[yearKey],
	}));
});

function formatDate(date: Date): string {
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric",
	});
}
</script>
<template>
  <article class="space-y-10">
    <h1 class="text-2xl font-bold flex items-center gap-2">
      <NotoNote /> Writing
    </h1>

    <div v-if="postsByYear.length === 0" class="text-center py-10">
      <p class="text-xl text-muted-foreground">No posts yet. Stay tuned!</p>
    </div>

    <section v-for="yearGroup in postsByYear" :key="yearGroup.year" class="mb-10">
      <h2 class="text-2xl font-semibold text-foreground border-b border-border pb-2 mb-5">
        {{ yearGroup.year }}
      </h2>
      <ul class="space-y-1">
        <li v-for="post in yearGroup.posts" :key="post.id" class="group">
          <a :href="`/blog/${post.slug}`" :target="'_self'" :rel="post.externalUrl ? 'noopener noreferrer' : undefined"
            class="flex flex-col sm:flex-row sm:items-center justify-between py-3 px-2 -mx-2 rounded-md transition-colors group-hover:bg-accent group-hover:text-accent-foreground no-underline">
            <div class="flex-grow mb-1 sm:mb-0">
              <h3 class="font-medium text-foreground group-hover:underline">
                {{ post.title }}
                <span v-if="post.externalUrl" class="text-xs text-muted-foreground">↗</span>
              </h3>
              <p v-if="post.excerpt" class="text-sm text-muted-foreground hidden md:block mt-0.5">
                {{ post.excerpt }}
              </p>
            </div>
            <span class="text-sm text-muted-foreground w-20 text-left">
              {{ formatDate(post.date) }}
            </span>
          </a>
          <p v-if="post.excerpt" class="text-sm text-muted-foreground md:hidden mt-1 px-2">
            {{ post.excerpt }}
          </p>
        </li>
      </ul>
    </section>
  </article>
</template>
