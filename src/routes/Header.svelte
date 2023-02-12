<script lang="ts">
  import { page } from "$app/stores";
  import { randomEmoji } from '../components/useRandomEmoji';

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
    <h1 class="font-bold text-black text-lg">
      Lucas Goyeche {$randomEmoji}
    </h1>
    
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
