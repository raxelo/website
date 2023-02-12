<script>
  import LucasPicture from '../components/LucasPicture.svelte';
  import TechBadge from '../components/TechBadge.svelte';
</script>

<section class="flex gap-12 items-center justify-center flex-wrap border-dashed p-5 lg:p-12 rounded-lg border-gray-300 border-[4px] transition-all hover:scale-[1.03] duration-500">
  <LucasPicture />

  <div class="max-w-lg flex flex-col gap-4 text-xl">
    <h3>
      professional problem solver, likes photography, design, web development, and anime.
    </h3>
    <p class="italic">
      complexity can't be written down.
    </p>
  </div>
</section>

<section class="mt-12 text-center">
  <h2 class="text-2xl font-bold mt-24 mb-12">technologies I like to work with</h2>

  <div class="flex flex-col gap-12">
    <div>
      <h3 class="text-xs font-bold mb-2 uppercase">frontend</h3>
      <div class="flex flex-wrap gap-4 justify-center">
        <TechBadge>vue</TechBadge>
        <TechBadge>react</TechBadge>
        <TechBadge>svelte</TechBadge>
        <TechBadge>vite</TechBadge>
      </div>
    </div>

    <div>
      <h3 class="text-xs font-bold mb-2 uppercase">backend</h3>
      <div class="flex flex-wrap gap-4 justify-center">
        <TechBadge>node</TechBadge>
        <TechBadge>mongodb</TechBadge>
        <TechBadge>express</TechBadge>
        <TechBadge>redis</TechBadge>
        <TechBadge>typeorm</TechBadge>
      </div>
    </div>

    <div>
      <h3 class="text-xs font-bold mb-2 uppercase">DevOps</h3>
      <div class="flex flex-wrap gap-4 justify-center">
        <TechBadge>docker</TechBadge>
        <TechBadge>git</TechBadge>
        <TechBadge>unix</TechBadge>
      </div>
    </div>

  </div>
</section>
