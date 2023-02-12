<script lang="ts">
	import lucas from '$lib/images/personal/lucas.webp';
	import lucas1 from '$lib/images/personal/lucas-1.png';
	import lucas2 from '$lib/images/personal/lucas-2.webp';
	import lucas3 from '$lib/images/personal/lucas-3.webp';
	import lucas4 from '$lib/images/personal/lucas-4.webp';
	import lucas5 from '$lib/images/personal/lucas-5.webp';
	import lucas6 from '$lib/images/personal/lucas-6.webp';

  const images = [
    lucas1,
    lucas2,
    lucas3,
    lucas4,
    lucas5,
    lucas6,
  ]

  let currentLucas = lucas;

  function selectRandomImage() {
    const index = Math.floor(Math.random() * images.length);
    currentLucas = images[index];
  }

  let isPaused = false;

  function run() {
    const delay = Math.floor(Math.random() * 400) + 40;
    setTimeout(() => {
      if (!isPaused) selectRandomImage();
      run();
    }, delay);
  }

  function stop() {
    isPaused = true;
  }

  function resume() {
    isPaused = false;
  }

  run();
</script>

<img class="w-40 h-40 block transition-all hover:scale-95 duration-300" src={currentLucas} alt="Lucas" on:mouseenter={stop} on:mouseleave={resume} />
