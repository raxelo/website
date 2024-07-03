<script setup lang="ts">
import IconList from "~/components/ui/tech/IconList.vue";
import { technologyIcons } from "~/components/ui/tech/TechnologyIcon";

const allLogos = technologyIcons;
</script>

<template>
  <article>
    <h1 class="text-2xl font-bold">Lucas Goyeche</h1>
    <div class="mb-4">
      <NuxtImg
        class="mb-4 mx-auto block sm:mb-0 sm:ml-2 sm:-mt-12 w-32 h-32 bg-black sm:float-right sm:inline rounded-full border-2 border-black shadow-[15px_0px_0_#000000]"
        src="/img/teamlab.jpg"
        alt="me in teamlab planets, Tokyo"
      />

      <p>
        Thank you for visiting my website! I'm a software dev based in
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Maldonado,+Maldonado+Department/"
          >Maldonado, Uruguay</a
        >.
      </p>

      <IconList class="flex gap-3 flex-wrap mt-5" />
    </div>

    <p>
      I have experience in full-stack web development, software architecture and
      DevOps. Having worked as a
      <a
        target="_blank"
        href="https://www.netsuite.com/portal/products/erp.shtml"
        >NetSuite</a
      >
      developer, I'm very familiar with refactoring and modernizing old
      codebases, as well as integrating with other systems.
    </p>

    <p>
      Currently working as a DevOps Architect at
      <a target="_blank" href="https://www.brokenrubik.co/">Broken Rubik</a>,
      where I'm responsible for the infrastructure, deployment, and internal
      tools, among full-stack development.
    </p>

    <p>
      In fact, you can check out a project I was deeply involved in,
      <a
        target="_blank"
        href="https://www.brokenrubik.co/case-stories/prescription-management"
        >here</a
      >.
    </p>

    <p>
      I'm also open to contract work, so if you have a project in mind, feel
      free to <NuxtLink to="/contact">contact me</NuxtLink>.
    </p>

    <hr class="my-3" />

    <p class="leading-relaxed">
      <NuxtImg
        class="w-full sm:w-[240px] sm:h-[320px] mr-2 md:float-left inline rounded-none"
        src="/img/aquarium.webp"
        alt="Kyoto Aquarium"
      />

      Apart from coding, I enjoy photography and videogames.

      <br />
      <br />

      Traveling is also a passion of mine, here's a picture I took in the
      <a href="https://www.kyoto-aquarium.com/en/index.html" target="_blank"
        >Kyoto Aquarium</a
      >
      <time datetime="2024-1-15 17:00"> earlier this year</time> 🎏
    </p>
  </article>
</template>
