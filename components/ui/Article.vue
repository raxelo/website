<script setup lang="ts">
defineProps<{
  link: string;
  title: string;
  thumbnail: string;
  alt: string;
}>();
</script>

<template>
  <NuxtLink :to="link">
    <div
      class="border-2 bg-gray-300 bg-opacity-10 border-black p-1 group h-full gap-2 grid-rows-[auto,3em,2fr,auto] justify-start items-start grid grid-cols-1"
    >
      <NuxtImg
        class="grayscale group-hover:grayscale-0 w-full rounded-none border-2 border-black h-32 object-cover object-top"
        :src="thumbnail"
        :alt="alt"
      />
      <h2 class="px-1 text-lg leading-tight font-bold">
        {{ title }}
      </h2>

      <div class="px-1 font-normal mb-4 h-full flex flex-col">
        <slot />
      </div>

      <button
        type="button"
        class="self-end group-hover:animate-pulse group-hover:duration-1000 w-full group-active:top-1 mb-[6px] group-active:bg-gray-300 relative flex items-center gap-1 justify-center tracking-wide font-medium bg-gray-200 text-black border-2 border-black text-opacity-90 px-4 py-1.5"
      >
        show me
        <span
          class="group-active:opacity-0 absolute bottom-[-7px] left-[-2px] box-content h-0.5 bg-gray-400 w-full block border-2 border-black"
        ></span>
      </button>
    </div>
  </NuxtLink>
</template>
