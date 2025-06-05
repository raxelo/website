import path from "node:path";
import VueRouter from "unplugin-vue-router/vite";
import Icons from "unplugin-icons/vite";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import netlify from "@netlify/vite-plugin";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		netlify(),
		Icons({
			compiler: "vue3",
			autoInstall: true,
		}),
		VueRouter({}),
		vue(),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
