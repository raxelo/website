import { ViteSSG } from "vite-ssg";
import { routes } from "vue-router/auto-routes";
import App from "./App.vue";
import RouterPrefetch from "vue-router-prefetch";

export const createApp = ViteSSG(
	// the root component
	App,
	// vue-router options
	{ routes },
	// function to have custom setups
	({ app, router, routes, isClient, initialState }) => {
		app.use(RouterPrefetch);
		// install plugins etc.
	},
);
