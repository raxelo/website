export class AudioProvider {
	private static instance: AudioProvider = null;
	private audioMap: Map<string, HTMLAudioElement>;

	static getInstance(): AudioProvider {
		if (AudioProvider.instance) return AudioProvider.instance;

		AudioProvider.instance = new AudioProvider();
		return AudioProvider.instance;
	}

	private constructor() {
		this.audioMap = new Map();
	}

	async getAudio(path: string): Promise<HTMLAudioElement> {
		if (this.audioMap.has(path)) return this.audioMap.get(path);

		// fetch and load the audio resource
		const audio = new Audio(path);
		await audio.load();

		// save to cache
		this.audioMap.set(path, audio);

		return audio;
	}
}
