import { watchPausable } from "@vueuse/core";
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

type AsyncImport = () => Promise<void>;

const importMap = new Map<HTMLAnchorElement, AsyncImport>();
var window
const ric = window && window.requestIdleCallback || setTimeout; // Fallback for Safari
const queue = ref<AsyncImport[]>([]);

var IntersectionObserver
if (!IntersectionObserver) {
  IntersectionObserver = class {

  }
}
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const link = entry.target as HTMLAnchorElement;
      const asyncImport = importMap.get(link) as AsyncImport;

      queue.value = [...queue.value, asyncImport];
    }
  }
});

// Handle next async import in the queue
const { pause, resume } = watchPausable(queue, ([asyncImport]) => {
  if (!asyncImport) {
    return;
  }

  // Wait for async import finished to run next iteration
  pause();

  // Wait for browser idle
  ric(async () => {
    // Ignore if network issue, will be automatically triggered again when necessary
    await asyncImport?.().catch(() => { });

    // Don't load again
    for (const [key, value] of importMap) {
      if (value === asyncImport) {
        importMap.delete(key);
        observer.unobserve(key);
      }
    }

    // Next iteration is ready
    resume();

    // Remove current async import from the queue to trigger next iteration
    queue.value = queue.value.slice(1);
  });
});

export default {
  install() {
    // @ts-expect-error
    RouterLink.mixins = [
      {
        mounted() {
          // @ts-expect-error connection is not implemented in Navigator interface yet
          if (window.navigator?.connection?.saveData === true) {
            return;
          }

          const el: HTMLAnchorElement = this.$el;

          // El can be a text node if using router-link as custom: https://router.vuejs.org/guide/advanced/extending-router-link.html
          if (!el?.tagName || el.target === "_blank") {
            return;
          }

          const components =
            useRouter()
              .getRoutes()
              .find(({ name }) => name === this.$props.to.name)?.components ??
            {};

          if (!components) {
            return;
          }

          for (const component of Object.values(
            components as Record<string, AsyncImport>,
          )) {
            // Component already imported becomes an object instead of a function
            // Or if already imported, prevent the function execution
            if (typeof component !== "function") {
              continue;
            }

            importMap.set(el, component);
            observer.observe(el);
          }
        },
        unmounted() {
          const el: HTMLAnchorElement = this.$el;

          if (!el?.tagName || el.target === "_blank") {
            return;
          }

          importMap.delete(el);
          observer.unobserve(el);
        },
      },
    ];
  },
};
