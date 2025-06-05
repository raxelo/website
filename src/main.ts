import { ViteSSG } from "vite-ssg";
import { routes } from "vue-router/auto-routes";
import App from "./App.vue";
import RouterPrefetch from "./lib/prefetch.ts";

export const createApp = ViteSSG(
	// the root component
	App,
	// vue-router options
	{ routes },
	// function to have custom setups
	({ app, router, routes, isClient, initialState }) => {
		if (isClient) {
			app.use(RouterPrefetch);
		}
	},
);
