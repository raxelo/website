<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { randomEmoji } from '../components/useRandomEmoji';

  import MdiTwitter from "~icons/mdi/twitter";
  import MdiGithub from "~icons/mdi/github";
  import MdiLinkedin from "~icons/mdi/linkedin";
  import MdiInstagram from "~icons/mdi/instagram";

  const social = [
    {
      name: "Twitter",
      icon: MdiTwitter,
      link: "https://twitter.com/nguilaElectrica",
      styles: "hover:text-blue-400",
    },
    {
      name: "Github",
      icon: MdiGithub,
      link: "https://github.com/raxelo",
      styles: "hover:text-gray-700",
    },
    {
      name: "Linkedin",
      icon: MdiLinkedin,
      link: "https://www.linkedin.com/in/lucasgoyeche/",
      styles: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: MdiInstagram,
      link: "https://www.instagram.com/lucasgoyeche/",
      styles: "hover:text-black",
    },
  ];
</script>

<svelte:head>
	<title>Lucas Goyeche</title>
	<meta name="description" content="Lucas Goyeche ; Software Developer and more!" />
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>{$randomEmoji}</text></svg>">
</svelte:head>

<div class="max-w-4xl mx-auto px-4 min-h-screen flex flex-col">
  <Header />

  <main>
    <slot />
  </main>

  <footer class="mt-auto flex gap-8 items-center justify-center mb-8 pt-24">
    {#each social as { name, icon: Icon, link, styles }}
      <a 
        href={link}
        target="_blank" 
        rel="noopener noreferrer"
        title={name}
        class="text-2xl text-gray-500 {styles} transition-all duration-300"
      >
        <Icon />
      </a>
    {/each}
  </footer>
</div>
