import type { Clock, MeshBasicMaterial, Scene } from 'three';

// This is ugly.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const GLTFLoader = import('three/examples/jsm/loaders/GLTFLoader.js');
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { WaveUtils } from '../../util/WaveUtils';
import { ElementWrapper } from '../ElementWrapper';

export class QuestionMark extends ElementWrapper {
	async buildElement(): Promise<GLTF> {
		const loader = new (await GLTFLoader).GLTFLoader();

		return await loader.loadAsync('/question.glb');
	}

	animate(clock: Clock): void {
		const element = this.element;
		if (!element) return;

		element.rotation.z = Math.sin(clock.getElapsedTime()) / 4;
		element.position.setY(WaveUtils.getY(clock.getElapsedTime()) * 2);
	}

	addToScene(scene: Scene): void {
		this.buildElement().then((element) => {
			this.element = element.scene;
			this.element.rotation.x = Math.PI * 0.4;
			this.element.scale.setScalar(7.5);
			scene.add(this.element);
		});
	}

	getName(): string {
		return 'QuestionMark';
	}
}
