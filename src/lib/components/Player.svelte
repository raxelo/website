<script lang="ts">
	import { AudioProvider } from '$lib/AudioProvider';

	import { fly } from 'svelte/transition';

	let audio: HTMLAudioElement = null;

	let loading = false;
	let audioName: string;
	let playing: boolean;

	const audioProvider = AudioProvider.getInstance();

	export async function playSound(name: string, volume: number) {
		if (loading) return;
		loading = true;
		if (audio != null && !audio.paused) {
			await audio.pause();
		}

		audio = await audioProvider.getAudio(name);

		audio.onended = () => (playing = false);
		audioName = name;
		audio.currentTime = 0;
		audio.volume = volume;

		try {
			await audio.play();
			playing = true;
		} catch (ignored) {}
		loading = false;
	}

	export function stop() {
		if (audio == null || audio.paused) return;
		audio.pause();
		playing = false;
	}
</script>

{#if playing}
	<div
		transition:fly={{ y: -15, duration: 500 }}
		class="absolute left-0 bottom-0 mb-8 ml-8 text-xs uppercase font-normal flex items-center justify-center"
	>
		now playing {audioName}
	</div>
{/if}
