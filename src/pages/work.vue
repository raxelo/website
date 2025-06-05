<script setup lang="ts">
import { h } from "vue";
import Briefcase from "~icons/noto/briefcase";

import TS from "~icons/devicon/typescript";
import Vue from "~icons/devicon/vuejs";
import GitHub from "~icons/mdi/github";
import ESLint from "~icons/logos/eslint";
import Docker from "~icons/logos/docker-icon";
import DigitalOcean from "~icons/devicon/digitalocean";
import Sass from "~icons/devicon/sass";
import NetSuiteIcon from "~icons/cib/oracle-netsuite";
import Vite from "~icons/logos/vitejs";
import Grafana from "~icons/logos/grafana";
import Tailwind from "~icons/devicon/tailwindcss";

import TechnologyIcon from "@/components/ui/technology-icon/TechnologyIcon.vue";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface Project {
	title: string;
	url: string;
	description?: string;
	type?: string;
	thumbnail?: string;
	alt?: string;
}

interface BlogPost {
	title: string;
	url: string;
	platform?: string;
	date?: string;
}

interface WorkExperience {
	id: string;
	textColor?: string;
	company: string;
	companyUrl?: string;
	role: string;
	period: string;
	descriptionParagraphs: string[];
	keyTechnologies?: ReadonlyArray<{
		key: string;
		name: string;
		component: any;
	}>;
	projects?: ReadonlyArray<Project>;
	blogPosts?: ReadonlyArray<BlogPost>;
}

const workExperiences: ReadonlyArray<WorkExperience> = [
	{
		id: "odecloud",
		textColor: "text-rose-400",
		company: "OdeCloud",
		companyUrl: "https://www.odecloud.com/",
		role: "Full-Stack Engineer & Tech Lead",
		period: "December 2024 - Current",
		descriptionParagraphs: [
			"At OdeCloud, I contribute as a Full-Stack Engineer and Tech Lead, focusing on building and scaling an innovative platform for technology consultants.",
			"My responsibilities include architecting new features, leading the front-end team, and collaborating with DevOps to ensure the robustness and performance of our systems. We're passionate about transforming IT consulting for the future.",
		],
	},
	{
		id: "broken-rubik",
		textColor: "text-purple-500",
		company: "Broken Rubik",
		companyUrl: "https://brokenrubik.co",
		role: "Team Leader & DevOps Architect",
		period: "June 2021 - December 2024",
		descriptionParagraphs: [
			"As a Team Leader and DevOps Architect at Broken Rubik, I promoted development initiatives and bootstrapped our DevOps strategies. My focus was on building deployment pipelines, gathering metrics, and building internal tools for the dev team.",
			"I developed 'Catalyst,' a key internal project comprising a CLI and toolkit designed to automate and streamline SuiteCommerce deployments and activations. This significantly improved our development workflow and efficiency. I also authored a blog post detailing our approach to monitoring and enhancing these deployment processes (see blog posts below).",
		],
		keyTechnologies: [
			{ key: "github", name: "GitHub", component: GitHub },
			{ key: "eslint", name: "ESLint", component: ESLint },
			{ key: "digitalocean", name: "DigitalOcean", component: DigitalOcean },
			{ key: "docker", name: "Docker", component: Docker },
			{ key: "grafana", name: "Grafana", component: Grafana },
			{ key: "vue", name: "Vue.js", component: Vue },
			{ key: "typescript", name: "Typescript", component: TS },
			{ key: "sass", name: "Sass", component: Sass },
			{ key: "tailwind", name: "TailwindCSS", component: Tailwind },
		],
		projects: [
			{
				title: "Technical Slideshows",
				url: "/work/broken-rubik-slideshows",
				description:
					"A collection of slideshows I made for presentations at Broken Rubik. These varied from sharing technical concepts with the team, to running benchmarks on Sass engines (node-sass vs dart-sass), and presenting internal CLIs.",
				type: "slides",
				thumbnail: "/img/projects/slides.png",
				alt: "Slideshow preview",
			},
		],
		blogPosts: [
			{
				title:
					"How to Monitor and Improve Deployment Performance in SuiteCommerce",
				url: "https://www.brokenrubik.co/blog/how-to-monitor-and-improve-deployment-performance-in-suitecommerce",
				platform: "Broken Rubik Blog (Authored)",
				date: "November 2024",
			},
			{
				title: "Revolutionizing SuiteCommerce Deployment and Activation",
				url: "https://www.brokenrubik.co/blog/revolutionizing-suitecommerce-deployment-and-activation",
				platform: "Broken Rubik Blog (Describes Catalyst project I developed)",
				date: "November 2024",
			},
		],
	},
	{
		id: "independent-consultant",
		company: "Independent Consultant",
		role: "NetSuite Developer",
		period: "Past",
		descriptionParagraphs: [
			"During my time as an Independent Consultant, I specialized in NetSuite development, helping businesses optimize their ERP systems and integrate custom solutions.",
			"A key highlight was the ArcoSpace.io project, where I developed highly configurable branding customizations for their SuiteCommerce site, significantly enhancing their e-commerce capabilities and user experience.",
		],
		keyTechnologies: [
			{ key: "netsuite", name: "NetSuite", component: NetSuiteIcon },
			{ key: "vue", name: "Vue.js", component: Vue },
			{ key: "vite", name: "Vite", component: Vite },
			{ key: "tailwind", name: "TailwindCSS", component: Tailwind },
		],
		projects: [
			{
				title: "SCA Toolbar",
				url: "https://chromewebstore.google.com/detail/ibfgepefadbimmjbiolbajfememhfiio?utm_source=item-share-cb",
				description:
					"Toolbar Extension to help with development in SuiteCommerce sites.",
				type: "chrome extension",
				thumbnail: "/img/projects/sca-toolbar.png",
				alt: "Toolbar Extension I developed to help with development in SuiteCommerce projects",
			},
			{
				title: "NetSuite Search Extension",
				url: "https://chromewebstore.google.com/detail/jolepjelafhcjmidbhhaialdjkmnjhhn?utm_source=item-share-cb",
				description:
					"Allows you to press CMD + K and open a better search menu on NetSuite. Blazingly fast and keyboard-first.",
				type: "chrome extension",
				thumbnail: "/img/projects/ns-search.png",
				alt: "Thumbnail of the search extension",
			},
		],
		blogPosts: [],
	},
];
</script>

<template>
  <article class="space-y-10">
    <h1 class="text-2xl font-bold flex items-center gap-2">
      <Briefcase /> Work Experience
    </h1>

    <router-view />

    <Card v-for="exp in workExperiences" :key="exp.id" class="overflow-hidden">
      <CardHeader>
        <CardTitle class="text-2xl">
          <a v-if="exp.companyUrl" :href="exp.companyUrl" target="_blank" rel="noopener noreferrer"
            class="hover:underline" :class="exp.textColor">
            {{ exp.company }}
          </a>
          <span v-else>{{ exp.company }}</span>
        </CardTitle>
        <CardDescription class="text-md">
          {{ exp.role }} | {{ exp.period }}
        </CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">

        <p v-for="(paragraph, index) in exp.descriptionParagraphs" :key="index"
          class="text-muted-foreground leading-relaxed">
          {{ paragraph }}
        </p>

        <div v-if="exp.keyTechnologies && exp.keyTechnologies.length > 0">
          <h3 class="text-sm font-semibold mb-2 mt-4 uppercase tracking-wider">
            Key Technologies:
          </h3>
          <div class="flex gap-2 gap-y-3 flex-wrap">
            <TechnologyIcon v-for="icon in exp.keyTechnologies" :key="icon.key" :tooltip="icon.name">
              <component :is="icon.component" class="mx-0.5 size-6 hover:scale-110 transition-all" />
            </TechnologyIcon>
          </div>
        </div>

        <div v-if="exp.projects && exp.projects.length > 0" class="mt-5">
          <h3 class="text-sm font-semibold mb-5 uppercase tracking-wider">
            Notable Projects & Contributions:
          </h3>
          <ul class="list-inside space-y-5">
            <li v-for="project in exp.projects" :key="project.title"
              class="text-muted-foreground flex gap-1 sm:gap-3 flex-wrap sm:flex-nowrap">

              <img v-if="project.thumbnail" :src="project.thumbnail" :alt="project.alt || project.title"
                class="block w-full sm:w-64 h-50 sm:h-40 shrink-0 border-2 object-cover" loading="lazy" />

              <div>
                <component :is="project.url.startsWith('/') ? 'router-link' : 'a'"
                  :target="project.url.startsWith('/') ? '' : '_blank'" :href="project.url" :to="project.url"
                  rel="noopener noreferrer" class="font-medium text-blue-500 hover:text-blue-400 hover:underline">
                  {{ project.title }}
                </component>

                <span v-if="project.type" class="text-xs italic">
                  ({{ project.type }})
                </span>
                <p v-if="project.description" class="text-sm mt-0.5">
                  {{ project.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div v-if="exp.blogPosts && exp.blogPosts.length > 0" class="mt-5">
          <h3 class="text-sm font-semibold mb-5 uppercase tracking-wider">
            Blog Posts & Articles:
          </h3>
          <ul class="list-inside space-y-5">
            <li v-for="post in exp.blogPosts" :key="post.title" class="text-muted-foreground">
              <a :href="post.url" target="_blank" rel="noopener noreferrer"
                class="text-blue-500 hover:text-blue-400 hover:underline">
                {{ post.title }}
              </a>
              <div v-if="post.platform" class="text-xs italic">
                on {{ post.platform }} <span v-if="post.date">, {{ post.date }}</span>.
              </div>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </article>
</template>
