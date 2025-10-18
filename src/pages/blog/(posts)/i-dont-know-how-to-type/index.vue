<route lang="yaml">
meta:
  title: "I don't know how to type."
  description: "Learning to type properly on an ortholinear keyboard after 8 years of wrist pain"
  publishedDate: "2025-10-18"
  tags: ["hardware", "ergonomics", "learning"]
  draft: false
</route>

<script setup lang="ts">
import { useHead } from "@unhead/vue";

definePage({
	meta: {
		title: "I don't know how to type.",
		description:
			"Learning to type properly on an ortholinear keyboard after 8 years of wrist pain",
		publishedDate: "2025-10-18",
		tags: ["hardware", "ergonomics", "learning"],
		author: "Lucas Goyeche",
	},
});

useHead({
	title: "Lucas Goyeche - I don't know how to type.",
	meta: [
		{
			name: "description",
			content:
				"Learning to type properly on an ortholinear keyboard after 8 years of wrist pain",
		},
	],
});
</script>

<template>
  <article class="max-w-none">
    <div class="prose dark:prose-invert prose-quoteless prose-neutral">
      <header>
        <h1 class="text-3xl font-bold mb-2">
          I don't know how to type.
        </h1>
        <p class="text-sm text-muted-foreground">Published on October 18, 2025</p>
      </header>

      <p>
        A few weeks ago I bought a <a href="https://kinesis-ergo.com/keyboards/advantage360/" target="_blank"
          rel="noopener noreferrer">Kinesis 360 Advantage</a> keyboard. I've had wrist pain on and off for the past 8
        years or so, nothing that prevents me from using a computer but I did get scared a few times.
      </p>

      <p>
        On top of that, I wanted to invest on a good keyboard that not only had ergonomics but also a good build quality
        and experience.
      </p>

      <h2>It's harder than I expected.</h2>

      <p>
        Typing on an ortholinear keyboard is very different from typing on a laptop. You feel kind of forced to learn
        proper finger placement and you suddenly realize how bad you're used to typing. I started using typingstudy.com 30m
        a day to rewire my brain and type properly, though I am still not as fast as I can be on regular keyboard.
      </p>

      <h2>I'm struggling to use common keyboard shortcuts.</h2>

      <p>
        Tyiping words is one thing but re-learning Ctrl,Super,Shift combinations is another challenge. On a regular
        keyboard I don't even think about this, but now I find myself having to pause for a moment to press a key combo.
        Over time I'm getting more used to it but it's still not automatic yet. I will continue practicing and I hope to
        slowly get better at it.
      </p>
    </div>
  </article>
</template>
