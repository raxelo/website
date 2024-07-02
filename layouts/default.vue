<script lang="ts" setup>
import MessageIcon from "~icons/pixelarticons/message-arrow-left";
import HomeIcon from "~icons/pixelarticons/building-community";
import Footer from "@/components/ui/Footer.vue";
import Card from "@/components/ui/Card.vue";
import FirstTimeNotice from "~/components/interactions/FirstTimeNotice.vue";

useSeoMeta({
  title: "Lucas Goyeche - Software Dev based in Uruguay",
  ogTitle: "Lucas Goyeche - Software Dev based in Uruguay",
  description:
    "Welcome to my little website where I publish my projects and thoughts about software development.",
  ogDescription:
    "Welcome to my little website where I publish my projects and thoughts about software development.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UiPullcord />

  <main>
    <div class="flex">
      <nav class="hidden md:flex flex-col gap-12 min-h-[700px]">
        <Card link="/">
          <template #card-header>
            <div class="flex h-full items-end">
              <h2 class="text-2xl font-black mb-0">Home</h2>
              <HomeIcon class="right-3 top-4 h-12 w-12 absolute text-red-500" />
            </div>
          </template>
          <template #card-footer>
            <div class="bg-red-400">(about me)</div>
          </template>
        </Card>
        <Card link="/portfolio">
          <template #card-header>
            <div>
              <h2 class="text-2xl font-black">Portfolio</h2>
              <img
                alt="Minecraft Logo"
                class="right-3 top-5 absolute w-12 h-12 object-fill"
                src="/cool/cube.png"
              />
            </div>
          </template>
          <template #card-footer>
            <div class="bg-green-400">click to see work projects</div>
          </template>
        </Card>
        <Card link="/projects">
          <template #card-header>
            <div class="flex h-full items-end">
              <h2 class="text-2xl font-black ml-auto mb-0">Projects</h2>
              <img
                alt="TypeScript Logo"
                class="left-10 object top-10 absolute w-8 h-8 object-fill"
                src="/cool/typescript.png"
              />
              <img
                alt="Chrome Logo"
                class="left-3 top-3 absolute w-10 h-10 object-fill"
                src="/cool/chrome.png"
              />
            </div>
          </template>

          <template #card-footer>
            <div class="bg-blue-400">personal projects</div>
          </template>
        </Card>
        <Card link="/contact">
          <template #card-header>
            <div class="flex h-full items-start justify-end">
              <h2 class="text-2xl font-black mb-0">Contact me</h2>
              <MessageIcon
                class="left-2 bottom-8 h-12 w-12 absolute text-purple-500"
              />
            </div>
          </template>

          <template #card-footer>
            <div class="bg-purple-400">let's work together</div>
          </template>
        </Card>
      </nav>

      <div class="w-full md:pl-16 text-sm flex flex-col gap-5">
        <slot />
      </div>
    </div>
  </main>

  <Footer />

  <FirstTimeNotice />
</template>
