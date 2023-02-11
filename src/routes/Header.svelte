<script lang="ts">
  import { page } from "$app/stores";
  import logo from "$lib/images/svelte-logo.svg";
  import Lucas from "../components/Lucas.svelte";

  const links = [
    {
      name: "Bio",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];
</script>

<header>
  <nav class="flex flex-col gap-4 items-center my-8 justify-center">
    <Lucas />
    <ul class="flex items-center gap-5">
      {#each links as link (link.href)}
        <li
          aria-current={$page.url.pathname === link.href ? "page" : undefined}
          class={$page.url.pathname === link.href ? "text-blue-400 underline" : "text-gray-400"}
        >
          <a href={link.href}>{link.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
