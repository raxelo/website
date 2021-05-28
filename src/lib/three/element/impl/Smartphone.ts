import { AmbientLight, Clock, MeshBasicMaterial, Scene } from 'three';

// This is ugly.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const GLTFLoader = import('three/examples/jsm/loaders/GLTFLoader.js');
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { WaveUtils } from '../../util/WaveUtils';
import { ElementWrapper } from '../ElementWrapper';

export class Smartphone extends ElementWrapper {
	async buildElement(): Promise<GLTF> {
		const loader = new (await GLTFLoader).GLTFLoader();

		return await loader.loadAsync('/smartphone.glb');
	}

	animate(clock: Clock): void {
		const element = this.element;
		if (!element) return;

		element.rotation.z = Math.sin(clock.getElapsedTime()) / 4;
		// element.rotation.z += 0.01;
		this.element.rotation.x = Math.PI * (Math.sin(clock.getElapsedTime()) / 10) + Math.PI * 0.5;
		element.position.setY(WaveUtils.getY(clock.getElapsedTime()) * 2);
	}

	addToScene(scene: Scene): void {
		this.buildElement().then((element) => {
			this.element = element.scene;
			this.element.scale.setScalar(4);
			scene.add(this.element);
		});
	}

	getName(): string {
		return 'Smartphone';
	}
}
