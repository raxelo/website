// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  experimental: {
    appManifest: false,
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: "https://awesome-lib.js" },
      ],
    },
  },
  modules: [
    "@nuxt/image",
    ["unplugin-icons/nuxt", { autoInstall: true }],
    "@nuxtjs/color-mode",
    "@nuxt/image",
  ],
  colorMode: {
    classSuffix: "",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
