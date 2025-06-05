<script setup lang="ts">
import { computed } from "vue";
import NotoNote from "~icons/noto/spiral-notepad";
import { getBlogPosts } from "@/lib/blog";
import { useHead } from "@unhead/vue";

useHead({
	title: "Lucas Goyeche's Blog",
	meta: [
		{
			name: "description",
			content: "My thoughts on development, tools, and workflow",
		},
	],
});

interface BlogPost {
	path: string;
	title: string;
	slug: string;
	publishedDate: string;
	excerpt?: string;
	externalUrl?: string;
}

const blogPosts: BlogPost[] = getBlogPosts();

const sortedPosts = computed(() => {
	return [...blogPosts].sort(
		(a, b) =>
			new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
	);
});

const postsByYear = computed(() => {
	const groups: Record<string, BlogPost[]> = {};

	// Group posts by year. Posts within each year will maintain their sort order (newest first)
	// because `sortedPosts` is already sorted.
	for (const post of sortedPosts.value) {
		const year = new Date(post.publishedDate).getFullYear().toString();
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
        <li v-for="post in yearGroup.posts" :key="post.path" class="group">
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
              {{ formatDate(new Date(post.publishedDate)) }}
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
