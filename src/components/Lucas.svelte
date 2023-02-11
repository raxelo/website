<script lang="ts">
  const emojis = ["👋", "✨", "🦝", "❤️", "⭐️", "👨‍💻", "🍞", "🍕", "⚡️"];

  let lastEmoji = "";

  function randomEmoji() {
    let emoji = emojis[Math.floor(Math.random() * emojis.length)];
    if (emoji === lastEmoji) {
      emoji = randomEmoji();
    }
    lastEmoji = emoji;
    return emoji;
  }

  let emoji = randomEmoji();

  setInterval(() => {
    emoji = randomEmoji();
  }, 1000);
</script>

<h1 class="font-bold text-black text-lg">
  Lucas Goyeche {emoji}
</h1>
