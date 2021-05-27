export class WaveUtils {
	static o(x: number): number {
		return -1 / (x / 50 + 1) + 3 / 2;
	}

	static getY(x: number): number {
		return -Math.sin(x / this.o(x));
	}
}
