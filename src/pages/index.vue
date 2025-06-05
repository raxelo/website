<script setup lang="ts">
import NotoRaccoon from "~icons/noto/raccoon";

import Vue from "~icons/devicon/vuejs";
import Vite from "~icons/devicon/vitejs";
import TS from "~icons/devicon/typescript";
import Tailwind from "~icons/devicon/tailwindcss";
import React from "~icons/logos/react";
import Java from "~icons/logos/java";
import Git from "~icons/mdi/git";
import GitHub from "~icons/mdi/github";
import AWS from "~icons/mdi/aws";
import Python from "~icons/logos/python";
import Elixir from "~icons/devicon/elixir";
import Cloudflare from "~icons/devicon/cloudflare";
import Phoenix from "~icons/logos/phoenix";
import ESLint from "~icons/logos/eslint";
import Docker from "~icons/logos/docker-icon";
import Redis from "~icons/devicon/redis";
import MongoDB from "~icons/devicon/mongodb";
import VSCode from "~icons/devicon/vscode";
import DigitalOcean from "~icons/devicon/digitalocean";
import NetSuite from "~icons/cib/oracle-netsuite";

import TechnologyIcon from "@/components/ui/technology-icon/TechnologyIcon.vue";
import { computed, ref } from "vue";

const technologyIcons = [
	{
		key: "vue",
		name: "Vue",
		component: Vue,
	},
	{
		key: "react",
		name: "React",
		component: React,
	},
	{
		key: "vite",
		name: "Vite",
		component: Vite,
	},
	{
		key: "typescript",
		name: "TypeScript (node, bun, deno)",
		component: TS,
	},
	{
		key: "python",
		name: "Python",
		component: Python,
	},
	{
		key: "elixir",
		name: "Elixir",
		component: Elixir,
	},
	{
		key: "phoenix",
		name: "Phoenix Framework",
		component: Phoenix,
	},
	{
		key: "tailwind",
		name: "Tailwind",
		component: Tailwind,
	},
	{
		key: "java",
		name: "Java",
		component: Java,
	},
	{
		key: "git",
		name: "Git",
		component: Git,
	},
	{
		key: "github",
		name: "GitHub",
		component: GitHub,
	},
	{
		key: "eslint",
		name: "ESLint (API)",
		component: ESLint,
	},
	{
		key: "docker",
		name: "Docker",
		component: Docker,
	},
	{
		key: "redis",
		name: "Redis",
		component: Redis,
	},
	{
		key: "mongodb",
		name: "MongoDB",
		component: MongoDB,
	},
	{
		key: "vscode",
		name: "VSCode (API)",
		component: VSCode,
	},
	{
		key: "cloudflare",
		name: "Cloudflare",
		component: Cloudflare,
	},
	{
		key: "aws",
		name: "AWS",
		component: AWS,
	},
	{
		key: "digitalocean",
		name: "DigitalOcean (hosting)",
		component: DigitalOcean,
	},
	{
		key: "netsuite",
		name: "NetSuite",
		component: NetSuite,
	},
] as const;

const profilePictures = [
	{
		src: "/img/teamlab.jpg",
		alt: "me (Lucas) in teamlab planets, Tokyo",
	},
	{
		src: "/img/lucas.jpg",
		alt: "Lucas Goyeche",
	},
] as const;

const selectedImageIndex = ref(0);
const selectedAvatar = computed(
	() => profilePictures[selectedImageIndex.value],
);

const onClickAvatar = () => {
	if (selectedImageIndex.value === profilePictures.length - 1) {
		selectedImageIndex.value = 0;
		return;
	}

	selectedImageIndex.value++;
};
</script>

<template>
  <article>
    <h1 class="text-2xl font-bold flex items-center gap-2">
      <NotoRaccoon /> Lucas Goyeche
    </h1>
    <div class="mb-4">
      <button
        class="transition-all cursor-pointer hover:saturate-125 active:transform active:translate-1 active:shadow-sm overflow-hidden mb-4 mx-auto block sm:mb-0 bg-white sm:ml-2 sm:-mt-12 w-32 h-32 sm:float-right sm:inline rounded-full border-2 border-black shadow"
        @click="onClickAvatar">
        <img :src="selectedAvatar.src" :alt="selectedAvatar.alt" />
      </button>
      <p>
        Thank you for visiting my website! I'm a software dev based in
        <a target="_blank" href="https://www.google.com/maps/place/Maldonado,+Maldonado+Department/">Maldonado,
          Uruguay</a>.
      </p>

      <div class="flex gap-1.5 gap-y-5 flex-wrap mt-5">
        <TechnologyIcon v-for="icon in technologyIcons" :key="icon.key" :tooltip="icon.name">
          <component :is="icon.component" class="mx-1 size-7 hover:scale-120 transition-all" />
        </TechnologyIcon>
      </div>
    </div>

    <p>
      I have experience in full-stack web development, software architecture and
      DevOps. Having worked as a
      <a target="_blank" href="https://www.netsuite.com/portal/products/erp.shtml">NetSuite</a>
      developer, I'm very familiar with refactoring and modernizing old
      codebases, as well as integrating with other systems.
    </p>

    <p>
      My work centers around the web. I believe it's the most accessible platform for reaching people 🌐
    </p>

    <blockquote class="mt-6 border-l-2 pl-6 italic text-muted-foreground">
      Always bet on the web.
    </blockquote>

    <p>
      I work at <a class="font-bold text-rose-400" target="_blank" href="https://www.odecloud.com/">OdeCloud</a> as a
      Full-Stack
      Engineer and Tech Lead.
      We're building a platform for technology consultants, <a
        href="https://blog.odecloud.com/connect/ode-community/the-odecloud-community-transforming-it-consulting-for-the-future/"
        target="_blank">check it out!</a>
    </p>

    <hr class="my-3" />

    <aside class="overflow-auto py-3 leading-relaxed text-sm text-muted-foreground">
      <img class="border-2 shadow w-full sm:w-[120px] sm:h-[160px] mr-12 md:float-left inline rounded-none"
        src="/img/aquarium.webp" alt="Kyoto Aquarium">

      <p>
        Apart from coding, I enjoy photography and videogames.
      </p>

      <p>
        Traveling is also a passion of mine, here's a picture I took in the
        <a href="https://www.kyoto-aquarium.com/en/index.html" target="_blank">Kyoto Aquarium</a>
        <time datetime="2024-1-15 17:00"> earlier last year</time> 🎏
      </p>
    </aside>
  </article>
</template>
