<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
import SendIcon from "~icons/pixelarticons/mail-arrow-right";

const { copy } = useClipboard();
</script>

<template>
  <article>
    <h1 class="text-2xl font-bold">Get in touch</h1>

    <span
      popover
      id="copied-to-clipboard"
      class="text-black top-1 left-1/2 transform -translate-x-1/2 inset-[unset] bg-white bg-opacity-80 border-2 border-black"
    >
      Copied to clipboard
    </span>

    <div class="grid grid-cols-2 md:grid-cols-3 mt-6 gap-y-4">
      <div class="flex flex-col justify-start items-start relative">
        <span class="text-[0.75em] font-bold opacity-65"> Email </span>
        <button
          @click="copy('lucas@raxel.co')"
          popovertarget="copied-to-clipboard"
        >
          <a>lucas@raxel.co</a>
        </button>
      </div>
      <div class="flex flex-col justify-start items-start">
        <span class="text-[0.75em] font-bold opacity-65"> LinkedIn </span>
        <a href="https://www.linkedin.com/in/lucasgoyeche/" target="_blank">
          in/lucasgoyeche
        </a>
      </div>
      <div class="flex flex-col justify-start items-start">
        <span class="text-[0.75em] font-bold opacity-65"> OdeProfiles </span>
        <a
          href="https://feed.odecloud.app/odeprofiles/22635906-4042-4fe8-b116-df21698ee807"
          target="_blank"
        >
          Lucas Goyeche
        </a>
      </div>
      <div class="flex flex-col justify-start items-start">
        <span class="text-[0.75em] font-bold opacity-65"> GitHub </span>
        <a href="https://github.com/raxelo" target="_blank"> @raxelo </a>
      </div>

      <div class="flex flex-col justify-start items-start">
        <span class="text-[0.75em] font-bold opacity-65"> Discord </span>
        <button
          @click="copy('lucas@raxel.co')"
          popovertarget="copied-to-clipboard"
        >
          <a>@raxelo</a>
        </button>
      </div>
    </div>

    <form class="mt-12">
      <span class="text-lg font-bold block mb-2">Leave a message</span>

      <label class="block">
        <span class="uppercase text-[0.75em] font-bold opacity-65"> Name </span>
        <input
          type="text"
          class="w-full border-2 bg-gray-300 bg-opacity-10 border-black border-opacity-60 focus:outline-none p-2 rounded-none shadow-[15px_15px_0_#15151575] focus:shadow-[15px_15px_0_black] content"
        />
      </label>

      <label class="block mt-5">
        <span class="uppercase text-[0.75em] font-bold opacity-65">
          Email
        </span>
        <input
          type="text"
          class="w-full border-2 bg-gray-300 bg-opacity-10 border-gray-800 border-opacity-60 focus:outline-none p-2 rounded-none shadow-[15px_15px_0_#15151575] focus:shadow-[15px_15px_0_black]"
        />
      </label>

      <label class="block mt-5">
        <span class="uppercase text-[0.75em] font-bold opacity-65">
          Message
        </span>
        <textarea
          style="field-sizing: content"
          class="min-h-32 w-full border-2 bg-gray-300 bg-opacity-10 border-gray-800 border-opacity-60 focus:outline-none p-2 rounded-none shadow-[15px_15px_0_#15151575] focus:shadow-[15px_15px_0_black]"
        />
      </label>

      <button
        type="button"
        class="mx-auto w-1/3 group active:top-1 active:bg-purple-600 relative flex items-center gap-1 justify-center tracking-wide font-bold mt-5 bg-purple-500 text-white border-2 border-black text-opacity-90 px-4 py-1.5"
      >
        Send
        <SendIcon />

        <span
          class="group-active:opacity-0 absolute bottom-[-7px] left-[-2px] box-content h-0.5 bg-purple-700 w-full block border-2 border-black"
        ></span>
      </button>
    </form>
  </article>
</template>
