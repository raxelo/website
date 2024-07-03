<script lang="ts" setup>
import UIArticle from "~/components/ui/Article.vue";
import IconList from "~/components/ui/tech/IconList.vue";
</script>

<template>
  <h1 class="text-2xl font-bold">Experience</h1>

  <div class="grid grid-cols-2 gap-x-8 gap-y-6 auto-rows-fr">
    <UIArticle
      title="Technical Slideshows"
      thumbnail="/img/projects/slides.png"
      alt="Slideshow preview"
      link="/portfolio"
    >
      <p>
        A collection of slideshows I made for presentations at
        <span class="font-bold text-blue-300 border-b border-blue-300">
          Broken Rubik
        </span>
      </p>

      <div class="mt-auto flex mb-1">
        <IconList
          :icons="[
            'netsuite',
            'git',
            'github',
            'eslint',
            'docker',
            'typescript',
          ]"
        />
      </div>
    </UIArticle>

    <UIArticle
      title="SCA Toolbar"
      thumbnail="/img/projects/sca-toolbar.png"
      alt="Toolbar Extension I developed to help with development in SuiteCommerce projects"
      link="/portfolio"
    >
      <p>Toolbar Extension to help with development in SuiteCommerce sites.</p>

      <div class="mt-auto flex mb-1">
        <IconList :icons="['netsuite', 'vite', 'vue', 'tailwind']" />
      </div>
    </UIArticle>

    <UIArticle
      title="NetSuite Search Extension"
      thumbnail="/img/projects/ns-search.png"
      alt="Thumbnail of the search extension"
      link="/portfolio"
    >
      <p>
        Allows you to press CMD + K and open a better search menu on NetSuite.
      </p>
      <p class="mb-0">Blazingly fast and keyboard-first.</p>
    </UIArticle>
  </div>
</template>

