<route lang="yaml">
meta:
  title: "I learned how to type again"
  description: "Learning to type properly on an ortholinear keyboard after 8 years of wrist pain - part 2"
  publishedDate: "2025-12-06"
  tags: ["hardware", "ergonomics", "learning"]
  draft: false
</route>

<script setup lang="ts">
import { useHead } from "@unhead/vue";

definePage({
	meta: {
		title: "I learned how to type again",
		description:
			"Learning to type properly on an ortholinear keyboard after 8 years of wrist pain - part 2",
		publishedDate: "2025-12-06",
		tags: ["hardware", "ergonomics", "learning"],
		author: "Lucas Goyeche",
	},
});

useHead({
	title: "Lucas Goyeche - I learned how to type again.",
	meta: [
		{
			name: "description",
			content:
				"Learning to type properly on an ortholinear keyboard after 8 years of wrist pain - part 2",
		},
	],
});
</script>

<template>
  <article class="max-w-none">
    <div class="prose dark:prose-invert prose-quoteless prose-neutral">
      <header>
        <h1 class="text-3xl font-bold mb-2">
          I <span class="line-through">don't know</span> re-learned how to type.
        </h1>
        <p class="text-sm text-muted-foreground">Published on December 6, 2025</p>
      </header>

      <p>
        On my <router-link to="/blog/i-dont-know-how-to-type">previous entry</router-link> I complained about how hard it is to switch to an <a href="https://www.daskeyboard.com/blog/what-is-an-ortholinear-keyboard/" target="_blank">ortholinear keyboard</a>.
      </p>

      <p>
        It's now been what feels like a year of typing, but it's only been 2 months. Perhaps the difficulty had something to do with my perception of time... but besides!
      </p>

      <h2>I can now type "comfortably"</h2>

      <p>
        Finger placement feels automatic. I still type wrong on my laptop, but when using the separate keyboard I feel the difference.
      </p>

      <p>
        Switching to my laptop's keyboard to my main keyboard feels like switching from speaking Spanish to English in the same conversation. A bit awkward, but after 10 or 20 seconds it's fine. It's a similar feeling to switching keyboard layouts (like, en-US to es-AR), but even more extreme.
      </p>

      <h2>It's not over yet</h2>

      <p>I still struggle a bit with keyboard shortcuts. And haven't taken the time to rethink shortcuts with the thumb clusters.</p>
      <p>I want to spend a few days playing with shortcuts, thumb clusters, and perhaps even layers, but that will be its own chapter.</p>
    </div>
  </article>
</template>
