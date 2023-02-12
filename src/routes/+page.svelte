<script>
	import lucas from '$lib/images/lucas.webp';
</script>

<section class="flex gap-12 items-center justify-center flex-wrap border-dashed p-5 lg:p-12 rounded-lg border-gray-300 border-[4px] transition-all hover:scale-[1.03] duration-500">
  <img class="w-40 h-40 block" src={lucas} alt="Lucas" />

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
      <h3 class="text-xl font-bold mb-2">Frontend</h3>
      <div class="flex flex-wrap gap-4 justify-center">
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Vue</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">React</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Svelte</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Vite</span>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-bold mb-2">Backend</h3>
      <div class="flex flex-wrap gap-4 justify-center">
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Express</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Go</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">MongoDB</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Redis</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Typeorm</span>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-bold mb-2">DevOps</h3>
      <div class="flex flex-wrap gap-4 justify-center">
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Docker</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">git</span>
        <span class="bg-blue-100 text-blue-500 px-2 py-1 rounded-lg">Unix</span>
      </div>
    </div>

  </div>
</section>
