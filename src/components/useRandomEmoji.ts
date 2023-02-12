import { readable } from 'svelte/store';

export const randomEmoji = readable('✨', (set) => {
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
  const interval = setInterval(() => {
    set(randomEmoji());
  }, 1000);
  return function stop() {
    clearInterval(interval);
  }
})
