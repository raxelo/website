<script setup lang="ts">
import Article from "~/components/ui/Article.vue";
import IconList from "~/components/ui/tech/IconList.vue";
import TechnologyIcon from "~/components/ui/tech/TechnologyIcon.vue";

const openBR = () => {
  window.open("https://brokenrubik.com", "_blank");
};
</script>

<template>
  <h1 class="text-2xl font-bold">Experience</h1>

  <div class="grid grid-cols-2 gap-x-8 gap-y-6 auto-rows-fr">
    <Article
      title="Broken Rubik"
      thumbnail="/img/projects/brokenrubik.svg"
      alt="Broken Rubik Logo"
      link="/portfolio"
    >
      <p>
        My role as a team leader and DevOps architect at
        <span
          class="font-bold text-blue-300 border-b border-blue-300"
          @click="openBR"
          >Broken Rubik</span
        >.
      </p>

      <div class="mt-auto flex mb-1">
        <IconList
          :icons="['github', 'eslint', 'digitalocean', 'docker', 'vue']"
        />
      </div>
    </Article>

    <Article
      title="ArcoSpace.io"
      thumbnail="/img/projects/arcospace.png"
      alt="ArcoSpace NetSuite Consulting"
      link="/portfolio"
    >
      <p>
        Developed multiple highly configurable branding customizations for a
        client's SuiteCommerce site.
      </p>

      <div class="mt-auto flex mb-1">
        <IconList :icons="['netsuite']" />
      </div>
    </Article>
  </div>
</template>
